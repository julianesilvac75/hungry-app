import React, { useContext } from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import DoneFavRecipeCard from '../components/DoneFavRecipeCard';
import AppRecipesContext from '../context/AppRecipesContext';

function ReceitasFeitas() {
  const { doneRecipes } = useContext(AppRecipesContext);

  return (
    <div>
      <Header titleHeader="Done Recipes" isVisible={ false } />
      <FilterButtons />
      { doneRecipes.map((recipe, index) => (<DoneFavRecipeCard
        key={ recipe.id }
        index={ index }
        { ...recipe }
      />)) }
    </div>
  );
}

export default ReceitasFeitas;
