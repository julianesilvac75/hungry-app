import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarBebidas() {
  return (
    <div>
      <Header titleHeader="Explore Drinks" isVisible={ false } />
      <Link
        to="/explore/drinks/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient

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

export default ExplorarBebidas;
