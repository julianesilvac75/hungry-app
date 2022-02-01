import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';

function DetalhesDeComidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  console.log(recipeDetails);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0].includes(key) && (entry[1] !== '' && entry[1] !== ' '));
  }

  useEffect(() => {
    const URL = URLS.foods.detailById;
    fetchAPI(URL(id), (data) => setRecipeDetails(data.meals));
  }, [id]);

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
