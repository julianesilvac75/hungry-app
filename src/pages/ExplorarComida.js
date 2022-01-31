import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarComida() {
  return (
    <div>
      <Header titleHeader="Explore Foods" isVisible={ false } />
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

      <Link
        to="/"
        data-testid="explore-surprise"
      >
        Surprise me!
      </Link>
      <Footer />
    </div>
  );
}

export default ExplorarComida;
