import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './testConfig';

const USER_EMAIL = 'profile-email';
const DONE_RECIPES = 'profile-done-btn';
const FAV_RECIPES = 'profile-favorite-btn';
const LOGOUT_BTN = 'profile-logout-btn';
const TITLE = 'page-title';
const LOGIN_BTN = 'login-submit-btn';

describe('Tela de Perfil', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ email: 'alguem@email.com' }));
  });

  it('Verifica os elementos da tela', async () => {
    const { findByTestId } = renderWithRouter(<App />, '/profile');

    const userEmail = await findByTestId(USER_EMAIL);
    const doneRecipeBtn = await findByTestId(DONE_RECIPES);
    const favRecipeBtn = await findByTestId(FAV_RECIPES);
    const logout = await findByTestId(LOGOUT_BTN);

    expect(userEmail).toContainHTML('alguem@email.com');
    expect(doneRecipeBtn).toBeInTheDocument();
    expect(favRecipeBtn).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it('Verifica se ao clicar no Done Recipes vai para rota /done-recipes', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<App />, '/profile');

    const doneRecipeBtn = await findByTestId(DONE_RECIPES);
    userEvent.click(doneRecipeBtn);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Done Recipes');
  });

  it('Verifica se ao clicar no Favorite Recipes vai para /favorite-recipes', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<App />, '/profile');

    const favRecipeBtn = await findByTestId(FAV_RECIPES);
    userEvent.click(favRecipeBtn);

    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Favorite Recipes');
  });

  it('Verifica se ao clicar no botão Logout vai para tela Login', async () => {
    const { findByTestId } = renderWithRouter(<App />, '/profile');

    const logout = await findByTestId(LOGOUT_BTN);
    userEvent.click(logout);

    const login = await findByTestId(LOGIN_BTN);
    expect(login).toBeInTheDocument();
  });
});
