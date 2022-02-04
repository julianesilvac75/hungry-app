import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import DoneFavRecipeCard from '../components/DoneFavRecipeCard';
import AppRecipesContext from '../context/AppRecipesContext';

function ReceitasFavoritas() {
  const { favoriteRecipes } = useContext(AppRecipesContext);
  const [filterButton, setFilterButton] = useState('All');

  function filterRecipes() {
    if (filterButton === 'All') {
      return favoriteRecipes;
    }
    if (filterButton === 'Food') {
      return favoriteRecipes.filter(({ type }) => type === 'food');
    }
    return favoriteRecipes.filter(({ type }) => type === 'drink');
  }

  return (
    <div>
      <Header
        fixTitleSize="fix-title-size"
        titleHeader="Favorite Recipes"
        isVisible={ false }
      />
      <FilterButtons setFilterButton={ setFilterButton } />

      { filterRecipes().map((recipe, index) => (<DoneFavRecipeCard
        key={ recipe.id }
        index={ index }
        { ...recipe }
      />)) }
    </div>
  );
}

export default ReceitasFavoritas;
