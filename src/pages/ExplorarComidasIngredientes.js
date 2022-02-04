import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import fetchAPI from '../services/api';
import { TWELVE, URLS } from '../services/constants';

function ExplorarComidasIngredientes() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchAPI(URLS.foods.ingredientList, (data) => setIngredients(data.meals));
  }, []);

  return (
    <div>
      <Header
        fixTitleSize="fix-title-size"
        titleHeader="Explore Ingredients"
        isVisible={ false }
      />
      {
        ingredients.length > 0 && ingredients
          .filter((item, index) => index < TWELVE)
          .map(({ strIngredient }, i) => (
            <IngredientsCard
              key={ strIngredient }
              name={ strIngredient }
              index={ i }
              image={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            />
          ))
      }
      <Footer />
    </div>
  );
}

export default ExplorarComidasIngredientes;
