import React from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import DoneFavRecipeCard from '../components/DoneFavRecipeCard';

function ReceitasFeitas() {
  return (
    <div>
      <Header titleHeader="Done Recipes" isVisible={ false } />
      <FilterButtons />
      <DoneFavRecipeCard />
    </div>
  );
}

export default ReceitasFeitas;
