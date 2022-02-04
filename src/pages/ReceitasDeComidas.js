import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { URLS, TWELVE, FIVE } from '../services/constants';
import RecipesCard from '../components/RecipesCard';
import fetchAPI from '../services/api';
import AppRecipesContext from '../context/AppRecipesContext';
import '../styles/ReceitasDeComidas.css';

function ReceitasDeComidas() {
  const { startFoods, ingredientFood } = useContext(AppRecipesContext);
  const [recipes, setRecipes] = useState(startFoods);
  const [categories, setCategories] = useState([]);
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [actualCategory, setActualCategory] = useState('');

  useEffect(() => {
    if (ingredientFood !== '') {
      const URL = URLS.foods.ingredient(ingredientFood);
      fetchAPI(URL, (data) => setRecipesFiltered(data.meals));
    }
  }, [ingredientFood]);

  useEffect(() => {
    setRecipes(startFoods);
  }, [startFoods]);

  const getRecipesFromApi = (data) => {
    if (data.meals === null) {
      return alert('Sorry, we haven\'t found any recipes for these filters.');// eslint-disable-line no-alert
    }
    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchAPI(URLS.foods.category, (data) => setCategories(data.meals));
  }, []);

  if (recipes.length === 1) {
    return <Redirect to={ `/foods/${recipes[0].idMeal}` } />;
  }

  function whichCards() {
    if (recipesFiltered.length > 0) {
      return recipesFiltered;
    }
    return recipes;
  }

  function renderCards() {
    return whichCards().filter((recipe, i) => i < TWELVE)
      .map(({ strMeal, strMealThumb, idMeal }, i) => (
        <RecipesCard
          index={ i }
          name={ strMeal }
          url={ strMealThumb }
          key={ idMeal }
          id={ idMeal }
        />
      ));
  }

  function categoriesBtnHandler(strCategory) {
    if (actualCategory === strCategory) {
      setActualCategory('');
      return setRecipesFiltered([]);
    }

    const URL = URLS.foods.categorySelected(strCategory);
    fetchAPI(URL, (data) => setRecipesFiltered(data.meals));
    setActualCategory(strCategory);
  }

  function renderCategories() {
    return (
      <div className="categories-container">
        <button
          type="button"
          className="category-button"
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
                className="category-button"
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
      <Header titleHeader="Foods" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <div className="foods-section">
        {
          categories.length > 1 && renderCategories()
        }
        <div className="recipes-container">
          {
            recipes.length > 1 && renderCards()
          }
        </div>

      </div>
      <Footer className="main-div" />
    </div>
  );
}

export default ReceitasDeComidas;
