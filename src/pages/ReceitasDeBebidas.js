import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import { URLS, TWELVE, FIVE } from '../services/constants';
import fetchAPI from '../services/api';
import AppRecipesContext from '../context/AppRecipesContext';
import '../styles/ReceitasDeBebidas.css';

function ReceitasDeBebidas() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [actualCategory, setActualCategory] = useState('');
  const { ingredientDrink } = useContext(AppRecipesContext);

  useEffect(() => {
    if (ingredientDrink !== '') {
      const URL = URLS.drinks.ingredient(ingredientDrink);
      fetchAPI(URL, (data) => setRecipesFiltered(data.drinks));
    }
  }, [ingredientDrink]);

  const getRecipesFromApi = (data) => {
    if (data.drinks === null) {
      return alert('Sorry, we haven\'t found any recipes for these filters.');// eslint-disable-line no-alert
    }
    setRecipes(data.drinks);
  };

  useEffect(() => {
    fetchAPI(URLS.drinks.default, getRecipesFromApi);
    fetchAPI(URLS.drinks.category, (data) => setCategories(data.drinks));
  }, []);

  if (recipes.length === 1) {
    return <Redirect to={ `/drinks/${recipes[0].idDrink}` } />;
  }

  function whichCards() {
    if (recipesFiltered.length > 0) {
      return recipesFiltered;
    }
    return recipes;
  }

  function renderCards() {
    return whichCards()
      .filter((recipe, i) => i < TWELVE)
      .map(({ strDrink, strDrinkThumb, idDrink }, i) => (
        <RecipesCard
          index={ i }
          name={ strDrink }
          url={ strDrinkThumb }
          key={ idDrink }
          id={ idDrink }
        />
      ));
  }

  function categoriesBtnHandler(strCategory) {
    if (actualCategory === strCategory) {
      setActualCategory('');
      return setRecipesFiltered([]);
    }

    const URL = URLS.drinks.categorySelected(strCategory);
    fetchAPI(URL, (data) => setRecipesFiltered(data.drinks));
    setActualCategory(strCategory);
  }

  function renderCategories() {
    return (
      <div className="categories-container">
        <button
          type="button"
          className="category-button drink-button"
          onClick={ () => setRecipesFiltered([]) }
          data-testid="All-category-filter"
        >
          All
        </button>
        {
          categories
            .filter((category, i) => i < FIVE)
            .map(({ strCategory }) => (
              <button
                type="button"
                key={ strCategory }
                className="category-button  drink-button"
                data-testid={ `${strCategory}-category-filter` }
                onClick={ () => categoriesBtnHandler(strCategory) }
              >
                {strCategory}

              </button>
            ))
        }
      </div>
    );
  }

  return (
    <div>
      <Header titleHeader="Drinks" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <div className="recipes-section">
        {
          categories.length > 1 && renderCategories()
        }
        <div className="recipes-container">
          {
            recipes.length > 1 && renderCards()
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReceitasDeBebidas;
