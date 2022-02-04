import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import DoneFavRecipeCard from '../components/DoneFavRecipeCard';
import AppRecipesContext from '../context/AppRecipesContext';

function ReceitasFeitas() {
  const { doneRecipes } = useContext(AppRecipesContext);
  const [filterButton, setFilterButton] = useState('All');

  function filterRecipes() {
    if (filterButton === 'All') {
      return doneRecipes;
    }
    if (filterButton === 'Food') {
      return doneRecipes.filter(({ type }) => type === 'food');
    }
    return doneRecipes.filter(({ type }) => type === 'drink');
  }

  return (
    <div>
      <Header
        fixTitleSize="fix-title-size"
        titleHeader="Done Recipes"
        isVisible={ false }
      />
      <FilterButtons setFilterButton={ setFilterButton } />

      {filterRecipes().map((recipe, index) => (<DoneFavRecipeCard
        key={ recipe.id }
        index={ index }
        { ...recipe }
      />)) }
    </div>
  );
}

export default ReceitasFeitas;
