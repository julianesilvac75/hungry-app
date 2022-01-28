import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ReceitasDeBebidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => setRecipes(data.meals);

  return (
    <div>
      <Header titleHeader="Drinks" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <Footer />
    </div>
  );
}

export default ReceitasDeBebidas;
