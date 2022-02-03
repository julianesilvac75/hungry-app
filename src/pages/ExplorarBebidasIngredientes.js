import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import fetchAPI from '../services/api';
import { TWELVE, URLS } from '../services/constants';

function ExplorarBebidasIngredientes() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchAPI(URLS.drinks.ingredientList, (data) => setIngredients(data.drinks));
  }, []);

  console.log(ingredients);

  return (
    <div>
      <Header titleHeader="Explore Ingredients" isVisible={ false } />
      {
        ingredients.length > 0 && ingredients
          .filter((item, index) => index < TWELVE)
          .map(({ strIngredient1 }, i) => (
            <IngredientsCard
              key={ strIngredient1 }
              name={ strIngredient1 }
              index={ i }
              image={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
            />
          ))
      }
      <Footer />
    </div>
  );
}

export default ExplorarBebidasIngredientes;
