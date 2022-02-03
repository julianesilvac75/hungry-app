import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AppRecipesProvider from '../context/AppRecipesProvider';

const renderWithRouter = (component, route) => ({
  ...render(
    <AppRecipesProvider>
      <MemoryRouter initialEntries={ [route] }>{ component }</MemoryRouter>
    </AppRecipesProvider>,
  ),
});

export default renderWithRouter;
