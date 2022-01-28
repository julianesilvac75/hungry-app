import React from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';

function ReceitasFeitas() {
  return (
    <div>
      <Header titleHeader="Done Recipes" isVisible={ false } />
      <FilterButtons />
    </div>
  );
}

export default ReceitasFeitas;
