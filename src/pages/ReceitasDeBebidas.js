import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import { URLS, TWELVE, FIVE } from '../services/constants';
import fetchAPI from '../services/api';

function ReceitasDeBebidas() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

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

  function renderCards() {
    return recipes
      .filter((recipe, i) => i < TWELVE)
      .map(({ strDrink, strDrinkThumb }, i) => (
        <RecipesCard
          index={ i }
          name={ strDrink }
          url={ strDrinkThumb }
          key={ strDrink }
        />
      ));
  }

  function renderCategories() {
    return categories
      .filter((category, i) => i < FIVE)
      .map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}

        </button>
      ));
  }

  return (
    <div>
      <Header titleHeader="Drinks" isVisible getRecipesFromApi={ getRecipesFromApi } />
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

export default ReceitasDeBebidas;
