import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';

function DetalhesDeBebidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  console.log(recipeDetails);

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0].includes(key) && entry[1] !== null);
  }

  useEffect(() => {
    const URL = URLS.drinks.detailById;
    fetchAPI(URL(id), (data) => setRecipeDetails(data.drinks));
  }, [id]);

  return (
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
