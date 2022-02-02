import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';

function ExplorarBebidasIngredientes() {
  return (
    <div>
      <Header titleHeader="Explore Ingredients" isVisible={ false } />
      <IngredientsCard />
      <Footer />
    </div>
  );
}

export default ExplorarBebidasIngredientes;
