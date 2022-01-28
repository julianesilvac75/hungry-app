import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ReceitasDeBebidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => setRecipes(data.drinks);

  if (recipes.length === 1) {
    return <Redirect to={ `/drinks/${recipes[0].idDrink}` } />;
  }

  return (
    <div>
      <Header titleHeader="Drinks" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <Footer />
    </div>
  );
}

export default ReceitasDeBebidas;
