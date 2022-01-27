import React from 'react';
import PropTypes from 'prop-types';
import AppRecipesContext from './AppRecipesContext';

const AppRecipesProvider = ({ children }) => (
  <AppRecipesContext.Provider value="">
    { children }
  </AppRecipesContext.Provider>
);

AppRecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRecipesProvider;
