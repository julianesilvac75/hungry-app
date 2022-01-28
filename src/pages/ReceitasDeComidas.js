import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { URLS, TWELVE } from '../services/constants';
import RecipesCard from '../components/RecipesCard';
import fetchAPI from '../services/api';

function ReceitasDeComidas() {
  const [recipes, setRecipes] = useState([]);

  const getRecipesFromApi = (data) => {
    if (data.meals === null) {
      return alert('Sorry, we haven\'t found any recipes for these filters.');// eslint-disable-line no-alert
    }
    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchAPI(URLS.foods.default, getRecipesFromApi);
  }, []);

  if (recipes.length === 1) {
    return <Redirect to={ `/foods/${recipes[0].idMeal}` } />;
  }

  function renderCards() {
    return recipes
      .filter((recipe, i) => i < TWELVE)
      .map(({ strMeal, strMealThumb }, i) => (
        <RecipesCard
          index={ i }
          name={ strMeal }
          url={ strMealThumb }
          key={ strMeal }
        />
      ));
  }

  return (
    <div>
      <Header titleHeader="Foods" isVisible getRecipesFromApi={ getRecipesFromApi } />
      {
        recipes.length > 1 && renderCards()
      }
      <Footer />
    </div>
  );
}

export default ReceitasDeComidas;
