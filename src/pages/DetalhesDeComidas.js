import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';
import CarouselCard from '../components/CarouselCard';
import AppRecipesContext from '../context/AppRecipesContext';

function DetalhesDeComidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [carouselDetails, setCarouselDetails] = useState([]);
  const { doneRecipes, inProgressRecipes } = useContext(AppRecipesContext);
  const history = useHistory();

  function extractProperties(key) {
    return Object.entries(recipeDetails[0])
      .filter((entry) => entry[0].includes(key) && (entry[1] !== '' && entry[1] !== ' '));
  }

  useEffect(() => {
    const URL = URLS.foods.detailById(id);
    console.log(URL);
    fetchAPI(URL, (data) => setRecipeDetails(data.meals));
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

  console.log(recipeDetails);

  return (
    <div>
      {
        recipeDetails.length > 0 && <DetailsCard
          recipeDetails={ {
            name: recipeDetails[0].strMeal,
            image: recipeDetails[0].strMealThumb,
            category: recipeDetails[0].strCategory,
            ingredients: extractProperties('Ingredient'),
            measure: extractProperties('Measure'),
            instructions: recipeDetails[0].strInstructions,
            video: recipeDetails[0].strYoutube,
            id: recipeDetails[0].idMeal,
            nationality: recipeDetails[0].strArea,
            type: 'comida',
          } }
        />
      }

      {
        carouselDetails.length && <CarouselCard
          recipeDetails={ objFromCarouselDetails() }
        />
      }

      {
        !doneRecipes.some((recipe) => recipe.id === id) && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0' } }
            onClick={ () => history.push(`/foods/${id}/in-progress`) }
          >
            {
              Object.keys(inProgressRecipes.meals)
                .some((key) => (key === id)) ? 'Continue Recipe' : 'Start Recipe'
            }
          </button>
        )
      }

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
