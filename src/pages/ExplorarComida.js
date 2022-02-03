import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';

function ExplorarComida() {
  const [surpriseRecipe, setSurpriseRecipe] = useState([]);

  function handleSurpriseRecipe() {
    const URL = URLS.foods.randomRecipe;
    fetchAPI(URL, (data) => setSurpriseRecipe(data.meals));
  }

  if (surpriseRecipe.length > 0) {
    return <Redirect to={ `/foods/${surpriseRecipe[0].idMeal}` } />;
  }

  return (
    <div>
      <Header
        titleHeader="Explore Foods"
        isVisible={ false }
      />

      <Link
        to="/explore/foods/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient

      </Link>

      <Link
        to="/explore/foods/nationalities"
        data-testid="explore-by-nationality"
      >
        By Nationality

      </Link>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseRecipe }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExplorarComida.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExplorarComida;
