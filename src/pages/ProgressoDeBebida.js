import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressCard from '../components/ProgressCard';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';

function ProgressoDeBebida({ match: { params: { id } } }) {
  console.log(id);
  const [recipeDetails, setRecipeDetails] = useState([]);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0]
        .includes(key) && (entry[1] !== '' && entry[1] !== ' ' && entry[1] !== null));
  }

  function settingPropsDetails() {
    return {
      name: recipeDetails[0].strDrink,
      image: recipeDetails[0].strDrinkThumb,
      category: recipeDetails[0].strCategory,
      ingredients: extractProperties('Ingredient'),
      measure: extractProperties('Measure'),
      instructions: recipeDetails[0].strInstructions,
      id: recipeDetails[0].idDrink,
      nationality: '',
      type: 'drink',
      alcoholicOrNot: recipeDetails[0].strAlcoholic,
      tags: '',
    };
  }

  useEffect(() => {
    if (recipeDetails.length === 0) {
      const URL = URLS.drinks.detailById(id);
      fetchAPI(URL, (data) => setRecipeDetails(data.drinks));
    }
  }, [id, recipeDetails.length]);

  return (
    recipeDetails.length > 0 && <ProgressCard
      progressRecipe={ settingPropsDetails() }
    />
  );
}

ProgressoDeBebida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProgressoDeBebida;
