import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TWELVE } from '../services/constants';
import RecipesCard from '../components/RecipesCard';

function ReceitasDeComidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => {
    setRecipes(data.meals);
  };

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
