import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { URLS, TWELVE, FIVE } from '../services/constants';
import RecipesCard from '../components/RecipesCard';
import fetchAPI from '../services/api';
import AppRecipesContext from '../context/AppRecipesContext';

function ReceitasDeComidas() {
  const { startFoods } = useContext(AppRecipesContext);
  const [recipes, setRecipes] = useState(startFoods);
  const [categories, setCategories] = useState([]);
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [actualCategory, setActualCategory] = useState('');

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
      <div>
        {
          categories
            .filter((category, i) => i < FIVE)
            .map(({ strCategory }) => (
              <button
                type="button"
                key={ strCategory }
                data-testid={ `${strCategory}-category-filter` }
                onClick={ () => categoriesBtnHandler(strCategory) }
              >
                {strCategory}

              </button>
            ))
        }
        <button
          type="button"
          onClick={ () => setRecipesFiltered([]) }
          data-testid="All-category-filter"
        >
          All
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header titleHeader="Foods" isVisible getRecipesFromApi={ getRecipesFromApi } />
      {
        categories.length > 1 && renderCategories()
      }

      {
        recipes.length > 1 && renderCards()
      }
      <Footer />
    </div>
  );
}

export default ReceitasDeComidas;
