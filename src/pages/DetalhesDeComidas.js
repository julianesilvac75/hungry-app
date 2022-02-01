import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';
import CarouselCard from '../components/CarouselCard';

function DetalhesDeComidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [carouselDetails, setCarouselDetails] = useState([]);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0].includes(key) && (entry[1] !== '' && entry[1] !== ' '));
  }

  useEffect(() => {
    const URL = URLS.foods.detailById;
    fetchAPI(URL(id), (data) => setRecipeDetails(data.meals));
  }, [id]);

  useEffect(() => {
    const URL = URLS.drinks.default;
    fetchAPI(URL, (data) => setCarouselDetails(data.drinks));
  }, []);

  function objFromCarouselDetails() {
    return carouselDetails.map(({ strDrink, strAlcoholic, strDrinkThumb }) => (
      {
        name: strDrink,
        category: strAlcoholic,
        image: strDrinkThumb,
      }
    ));
  }

  return (
    <div>
      {
        recipeDetails.length && <DetailsCard
          recipeDetails={ {
            name: recipeDetails[0].strMeal,
            image: recipeDetails[0].strMealThumb,
            category: recipeDetails[0].strCategory,
            ingredients: extractProperties('Ingredient'),
            measure: extractProperties('Measure'),
            instructions: recipeDetails[0].strInstructions,
            video: recipeDetails[0].strYoutube,
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

DetalhesDeComidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetalhesDeComidas;
