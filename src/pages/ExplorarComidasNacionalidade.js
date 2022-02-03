import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import fetchAPI from '../services/api';
import { TWELVE, URLS } from '../services/constants';

function ExplorarComidasNacionalidade() {
  const [nationalities, setNationalities] = useState([]);
  const [selectValue, setSelectValue] = useState('All');
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    fetchAPI(URLS.foods.nationalityList, (data) => setNationalities(data.meals));
  }, []);

  useEffect(() => {
    if (selectValue === 'All') {
      fetchAPI(
        URLS.foods.default, (data) => setRecipesList(data.meals),
      );
    } else {
      fetchAPI(
        URLS.foods.nationality(selectValue), (data) => setRecipesList(data.meals),
      );
    }
  }, [selectValue]);

  return (
    <div>
      <Header titleHeader="Explore Nationalities" isVisible />

      <select
        onChange={ ({ target }) => setSelectValue(target.value) }
        data-testid="explore-by-nationality-dropdown"
      >
        <option
          data-testid="All-option"
        >
          All
        </option>
        {
          nationalities.length && nationalities.map(({ strArea }) => (
            <option
              key={ strArea }
              data-testid={ `${strArea}-option` }
            >
              { strArea }
            </option>
          ))
        }
      </select>

      {
        recipesList.length > 0 && recipesList
          .filter((item, i) => i < TWELVE)
          .map(({ idMeal, strMeal, strMealThumb }, i) => (
            <RecipesCard
              key={ idMeal }
              id={ idMeal }
              index={ i }
              name={ strMeal }
              url={ strMealThumb }
            />
          ))
      }

      <Footer />
    </div>
  );
}

export default ExplorarComidasNacionalidade;
