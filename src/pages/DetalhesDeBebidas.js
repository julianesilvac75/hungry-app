import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import CarouselCard from '../components/CarouselCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';

function DetalhesDeBebidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [carouselDetails, setCarouselDetails] = useState([]);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0].includes(key) && entry[1] !== null);
  }

  useEffect(() => {
    const URL = URLS.drinks.detailById;
    fetchAPI(URL(id), (data) => setRecipeDetails(data.drinks));
  }, [id]);

  useEffect(() => {
    const URL = URLS.foods.default;
    fetchAPI(URL, (data) => setCarouselDetails(data.meals));
  }, []);

  function objFromCarouselDetails() {
    return carouselDetails.map(({ strMeal, strCategory, strMealThumb }) => (
      {
        name: strMeal,
        category: strCategory,
        image: strMealThumb,
      }
    ));
  }

  return (
    <div>
      {
        recipeDetails.length && <DetailsCard
          recipeDetails={ {
            name: recipeDetails[0].strDrink,
            image: recipeDetails[0].strDrinkThumb,
            category: recipeDetails[0].strAlcoholic,
            ingredients: extractProperties('Ingredient'),
            measure: extractProperties('Measure'),
            instructions: recipeDetails[0].strInstructions,
          } }
        />
      }
      {
        carouselDetails.length && <CarouselCard
          recipeDetails={ objFromCarouselDetails() }
        />
      }

      <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
    </div>
  );
}

DetalhesDeBebidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetalhesDeBebidas;
