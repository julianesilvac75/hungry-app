import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './testConfig';

const BY_INGREDIENT = 'explore-by-ingredient';
const SURPRISE_ME = 'explore-surprise';
const TITLE = 'page-title';
const ROTA = '/explore/drinks';
// const PHOTO_RECIPE = 'recipe-photo';

describe('Tela de Explorar', () => {
  it('1-Verifica elementos das página', () => {
    const { getByTestId } = renderWithRouter(<App />, ROTA);

    const exploreIngredient = getByTestId(BY_INGREDIENT);
    const surpriseMe = getByTestId(SURPRISE_ME);

    expect(exploreIngredient).toContainHTML('By Ingredient');
    expect(surpriseMe).toContainHTML('Surprise me!');
  });

  it('2-Verifica ao clicar By Ingredient vai /explore/foods/ingredients', () => {
    const { getByTestId } = renderWithRouter(<App />, ROTA);

    const exploreIngredient = getByTestId(BY_INGREDIENT);
    userEvent.click(exploreIngredient);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Explore Ingredients');
  });

  // it('3-Verifica ao clicar Suprise Me vai /foods/:id', async () => {
  //   const { getByTestId, findByTestId } = renderWithRouter(<App />, '/drinks/:id');

  //   const surpriseMe = getByTestId(SURPRISE_ME);
  //   userEvent.click(surpriseMe);

  //   const recipe = findByTestId(PHOTO_RECIPE);
  //   expect(recipe).toBeInTheDocument();
  // });
});
