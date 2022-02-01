import React from 'react';
import PropTypes from 'prop-types';
import AppRecipesContext from './AppRecipesContext';
import useLocalStorage from '../hooks/useLocalStorage';

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
