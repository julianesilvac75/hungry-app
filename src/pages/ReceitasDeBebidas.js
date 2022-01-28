import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import { TWELVE } from '../services/constants';

function ReceitasDeBebidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => {
    if (data.drinks === null) {
      return alert('Sorry, we haven\'t found any recipes for these filters.');// eslint-disable-line no-alert
    }
    setRecipes(data.drinks);
  };

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

  return (
    <div>
      <Header titleHeader="Drinks" isVisible getRecipesFromApi={ getRecipesFromApi } />
      {
        recipes.length > 1 && renderCards()
      }
      <Footer />
    </div>
  );
}

export default ReceitasDeBebidas;
