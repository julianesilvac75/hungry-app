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
    meals: { 52977: '' },
  });
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
