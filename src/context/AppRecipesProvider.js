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
  const [userToken, setUserToken] = useLocalStorage('user', {});
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

  useEffect(() => {
    fetchAPI(URLS.foods.default, (data) => setStartFoods(data.meals));
  }, []);

  const verifyFavorite = (id) => favoriteRecipes.some((recipe) => recipe.id === id);

  const valueContext = {
    setMealsToken,
    setCocktailsToken,
    setUserToken,
    mealsToken,
    cocktailsToken,
    userToken,
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
