import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppRecipesContext from './AppRecipesContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';

const AppRecipesProvider = ({ children }) => {
  // const [saveEmail, setSaveEmail] = useLocalStorage()
  const [mealsToken, setMealsToken] = useLocalStorage('mealsToken', '');
  const [cocktailsToken, setCocktailsToken] = useLocalStorage('cocktailsToken', '');
  const [doneRecipes, setDoneRecipes] = useLocalStorage('doneRecipes', []);
  const [
    inProgressRecipes, setInProgressRecipes,
  ] = useLocalStorage('inProgressRecipes', {
    cocktails: {},
    meals: {},
  });
  const [
    favoriteRecipes, setFavoriteRecipes,
  ] = useLocalStorage('favoriteRecipes', []);
  const [startFoods, setStartFoods] = useState([]);
  const [progressCardInfo, setProgressCardInfo] = useState({});
  const [ingredientFood, setIngredientFood] = useState('');
  const [ingredientDrink, setIngredientDrink] = useState('');

  useEffect(() => {
    fetchAPI(URLS.foods.default, (data) => setStartFoods(data.meals));
  }, []);

  const verifyFavorite = (id) => favoriteRecipes.some((recipe) => recipe.id === id);

  function saveUsedIgredients(type, value, id) {
    const arrId = inProgressRecipes[type()][id] || [];
    if (arrId.some((item) => item === value)) {
      const newObj = { ...inProgressRecipes,
        [type()]: { [id]: arrId.filter((item) => item !== value) } };
      return setInProgressRecipes(newObj);
    }
    const newObj = { ...inProgressRecipes,
      [type()]: { [id]: [...arrId, value] } };
    return setInProgressRecipes(newObj);
  }

  function saveFavorites(id, newRecipe) {
    if (!verifyFavorite(id)) {
      return setFavoriteRecipes((prevState) => [...prevState, newRecipe]);
    }
    return setFavoriteRecipes((prevState) => (
      prevState.filter((recipe) => recipe.id !== id)));
  }

  const valueContext = {
    setMealsToken,
    setCocktailsToken,
    mealsToken,
    cocktailsToken,
    doneRecipes,
    setDoneRecipes,
    inProgressRecipes,
    setInProgressRecipes,
    favoriteRecipes,
    setFavoriteRecipes,
    verifyFavorite,
    startFoods,
    progressCardInfo,
    setProgressCardInfo,
    saveUsedIgredients,
    saveFavorites,
    ingredientFood,
    setIngredientFood,
    ingredientDrink,
    setIngredientDrink,
  };

  return (
    <AppRecipesContext.Provider value={ valueContext }>
      { children }
    </AppRecipesContext.Provider>
  );
};

AppRecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRecipesProvider;
