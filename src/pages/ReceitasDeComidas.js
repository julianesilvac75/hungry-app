import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ReceitasDeComidas() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const getRecipesFromApi = (data) => setRecipes(data.meals);

  return (
    <div>
      <Header titleHeader="Foods" isVisible getRecipesFromApi={ getRecipesFromApi } />
      <Footer />
    </div>
  );
}

export default ReceitasDeComidas;
