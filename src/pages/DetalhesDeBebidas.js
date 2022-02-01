import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import CarouselCard from '../components/CarouselCard';
import fetchAPI from '../services/api';
import { URLS } from '../services/constants';
import AppRecipesContext from '../context/AppRecipesContext';

function DetalhesDeBebidas({ match: { params: { id } } }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [carouselDetails, setCarouselDetails] = useState([]);
  const { doneRecipes, inProgressRecipes } = useContext(AppRecipesContext);
  const history = useHistory();

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

  console.log(recipeDetails);
  return (
    <div>
      {
        recipeDetails.length > 0 && <DetailsCard
          recipeDetails={ {
            name: recipeDetails[0].strDrink,
            image: recipeDetails[0].strDrinkThumb,
            category: recipeDetails[0].strCategory,
            ingredients: extractProperties('Ingredient'),
            measure: extractProperties('Measure'),
            instructions: recipeDetails[0].strInstructions,
            id: recipeDetails[0].idDrink,
            nationality: recipeDetails[0].strArea,
            type: 'bebida',
            alcoholic: recipeDetails[0].strAlcoholic,
          } }
        />
      }
      {
        carouselDetails.length > 0 && <CarouselCard
          recipeDetails={ objFromCarouselDetails() }
        />
      }

      {
        !doneRecipes.some((recipe) => recipe.id === id) && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0' } }
            onClick={ () => history.push(`/drinks/${id}/in-progress`) }
          >
            {
              Object.keys(inProgressRecipes.cocktails)
                .some((key) => (key === id)) ? 'Continue Recipe' : 'Start Recipe'
            }

          </button>
        )
      }
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
