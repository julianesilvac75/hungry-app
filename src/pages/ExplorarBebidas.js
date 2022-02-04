import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';

function ExplorarBebidas() {
  const [surpriseRecipe, setSurpriseRecipe] = useState([]);

  function handleSurpriseRecipe() {
    const URL = URLS.drinks.randomRecipe;
    fetchAPI(URL, (data) => setSurpriseRecipe(data.drinks));
  }

  if (surpriseRecipe.length > 0) {
    return <Redirect to={ `/drinks/${surpriseRecipe[0].idDrink}` } />;
  }

  return (
    <div>
      <Header
        fixTitleSize="fix-title-size"
        titleHeader="Explore Drinks"
        isVisible={ false }
      />
      <Link
        to="/explore/drinks/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient

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

export default ExplorarBebidas;
