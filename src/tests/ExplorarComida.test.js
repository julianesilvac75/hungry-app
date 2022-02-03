import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './testConfig';

const BY_INGREDIENT = 'explore-by-ingredient';
const BY_NATIONALITY = 'explore-by-nationality';
const SURPRISE_ME = 'explore-surprise';
const TITLE = 'page-title';
const ROTA = '/explore/foods';
const PHOTO_RECIPE = 'recipe-photo';

describe('Tela de Explorar', () => {
  it('1-Verifica elementos das página', () => {
    const { getByTestId } = renderWithRouter(<App />, ROTA);

    const exploreIngredient = getByTestId(BY_INGREDIENT);
    const exploreNationality = getByTestId(BY_NATIONALITY);
    const surpriseMe = getByTestId(SURPRISE_ME);

    expect(exploreIngredient).toContainHTML('By Ingredient');
    expect(exploreNationality).toContainHTML('By Nationality');
    expect(surpriseMe).toContainHTML('Surprise me!');
  });

  it('2-Verifica ao clicar By Ingredient vai /explore/foods/ingredients', () => {
    const { getByTestId } = renderWithRouter(<App />, ROTA);

    const exploreIngredient = getByTestId(BY_INGREDIENT);
    userEvent.click(exploreIngredient);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Explore Ingredients');
  });

  it('3-Verifica ao clicar nationalities vai /explore/foods', () => {
    const { getByTestId } = renderWithRouter(<App />, ROTA);

    const exploreNationality = getByTestId(BY_NATIONALITY);
    userEvent.click(exploreNationality);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Explore Nationalities');
  });

  // it('4-Verifica ao clicar Suprise Me vai /foods/:id', async () => {
  //   const { getByTestId, findByTestId } = renderWithRouter(<App />, '/foods/:id');

  //   const surpriseMe = getByTestId(SURPRISE_ME);
  //   userEvent.click(surpriseMe);

  //   const recipe = findByTestId(PHOTO_RECIPE);
  //   expect(recipe).toBeInTheDocument();
  // });
});
