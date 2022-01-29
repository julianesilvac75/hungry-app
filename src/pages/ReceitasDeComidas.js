/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { URLS, TWELVE, FIVE } from '../services/constants';
import RecipesCard from '../components/RecipesCard';
import fetchAPI from '../services/api';

function ReceitasDeComidas() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recipesFiltered, setRecipesFiltered] = useState([]);

  const getRecipesFromApi = (data) => {
    if (data.meals === null) {
      return alert('Sorry, we haven\'t found any recipes for these filters.');// eslint-disable-line no-alert
    }
    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchAPI(URLS.foods.default, getRecipesFromApi);
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
      .map(({ strMeal, strMealThumb }, i) => (
        <RecipesCard
          index={ i }
          name={ strMeal }
          url={ strMealThumb }
          key={ strMeal }
        />
      ));
  }

  function categoriesBtnHandler(strCategory) {
    const URL = URLS.foods.categorySelected(strCategory);
    fetchAPI(URL, (data) => setRecipesFiltered(data.meals));
  }

  function renderCategories() {
    return categories
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
      ));
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
