import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './testConfig';

const TITLE = 'page-title';
const EXPLORE_FOOD = 'explore-foods';
const EXPLORE_DRINKS = 'explore-drinks';

describe('Tela de Explorar', () => {
  it('Verifica elementos das página', () => {
    const { getByTestId } = renderWithRouter(<App />, '/explore');

    const exploreFood = getByTestId(EXPLORE_FOOD);
    const exploreDrinks = getByTestId(EXPLORE_DRINKS);

    expect(exploreFood).toContainHTML('Explore Foods');
    expect(exploreDrinks).toContainHTML('Explore Drinks');
  });

  it('Verifica ao clicar explore food vai /explore/foods', () => {
    const { getByTestId } = renderWithRouter(<App />, '/explore');

    const exploreFood = getByTestId(EXPLORE_FOOD);
    userEvent.click(exploreFood);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Explore Foods');
  });

  it('Verifica ao clicar explore drink vai /explore/drinks', () => {
    const { getByTestId } = renderWithRouter(<App />, '/explore');

    const exploreDrinks = getByTestId(EXPLORE_DRINKS);
    userEvent.click(exploreDrinks);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Explore Drinks');
  });
});
