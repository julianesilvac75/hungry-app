import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressCard from '../components/ProgressCard';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';

function ProgressoDeComida({ match: { params: { id } } }) {
  console.log(id);
  const [recipeDetails, setRecipeDetails] = useState([]);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0]
        .includes(key) && (entry[1] !== '' && entry[1] !== ' ' && entry[1] !== null));
  }

  function settingPropsDetails() {
    return {
      name: recipeDetails[0].strMeal,
      image: recipeDetails[0].strMealThumb,
      category: recipeDetails[0].strCategory,
      ingredients: extractProperties('Ingredient'),
      measure: extractProperties('Measure'),
      instructions: recipeDetails[0].strInstructions,
      video: recipeDetails[0].strYoutube,
      id: recipeDetails[0].idMeal,
      nationality: recipeDetails[0].strArea,
      type: 'food',
      alcoholicOrNot: '',
    };
  }

  useEffect(() => {
    if (recipeDetails.length === 0) {
      const URL = URLS.foods.detailById(id);
      fetchAPI(URL, (data) => setRecipeDetails(data.meals));
    }
  }, [id, recipeDetails.length]);

  return (
    recipeDetails.length > 0 && <ProgressCard
      progressRecipe={ settingPropsDetails() }
    />
  );
}

ProgressoDeComida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProgressoDeComida;
