import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ReceitasDeComidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => {
    setRecipes(data.meals);
  };

  if (recipes.length === 1) {
    return <Redirect to={ `/foods/${recipes[0].idMeal}` } />;
  }

  return (
    <div>
      <Header titleHeader="Foods" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <Footer />
    </div>
  );
}

export default ReceitasDeComidas;
