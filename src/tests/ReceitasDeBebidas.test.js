import React from 'react';
import userEvent from '@testing-library/user-event';
import waitForExpect from 'wait-for-expect';
import App from '../App';
import renderWithRouter from './testConfig';

const TITLE = 'page-title';
const PROFILE_ICON = 'profile-top-btn';
const SEARCH_ICON = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const SEARCH_BTN = 'exec-search-btn';
const NAME_RADIO = 'name-search-radio';
const FIRST_LETTER_RADIO = 'first-letter-search-radio';

const WORD = 'ahuahuahu';
const FIRST_LETTERS = 'eg';

describe('Tela de Receitas de Bebidas', () => {
  it('1- Verifica se existe título e ícones de profile e search', () => {
    const { getByTestId } = renderWithRouter(<App />, '/drinks');

    const title = getByTestId(TITLE);
    const profileIcon = getByTestId(PROFILE_ICON);
    const searchIcon = getByTestId(SEARCH_ICON);

    expect(title).toContainHTML('Drinks');
    expect(profileIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('2- Verifica se ao clicar no ícone Profile vai para rota /profile', () => {
    const { getByTestId } = renderWithRouter(<App />, '/drinks');

    const profileIcon = getByTestId(PROFILE_ICON);

    userEvent.click(profileIcon);
    const title = getByTestId(TITLE);
    expect(title).toContainHTML('Profile');
  });

  it('3-Verifica ao clicar ícone Search aparace e desaparece SearchBar ', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<App />, '/drinks');

    const searchIcon = getByTestId(SEARCH_ICON);
    userEvent.click(searchIcon);

    const searchInput = getByTestId(SEARCH_INPUT);

    const searchIngredient = await findByTestId('ingredient-search-radio');
    const searchName = await findByTestId(NAME_RADIO);
    const searchFirstLetter = await findByTestId(FIRST_LETTER_RADIO);
    const searchButton = await findByTestId(SEARCH_BTN);

    expect(searchInput).toBeInTheDocument();
    expect(searchIngredient).toBeInTheDocument();
    expect(searchName).toBeInTheDocument();
    expect(searchFirstLetter).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(searchInput).not.toBeInTheDocument();
    expect(searchIngredient).not.toBeInTheDocument();
    expect(searchName).not.toBeInTheDocument();
    expect(searchFirstLetter).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });

  it('4- Verifica se exibe alert caso nenhuma receita seja encontrada', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<App />, '/drinks');

    const searchIcon = getByTestId(SEARCH_ICON);
    userEvent.click(searchIcon);

    const searchInput = getByTestId(SEARCH_INPUT);
    const searchName = await findByTestId(NAME_RADIO);
    const searchButton = await findByTestId(SEARCH_BTN);

    userEvent.type(searchInput, WORD);
    userEvent.click(searchName);
    userEvent.click(searchButton);
    waitForExpect(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });

  it('5- Verifica se exibe alert caso busca First letter radio > 2 letras', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<App />, '/drinks');

    const searchIcon = getByTestId(SEARCH_ICON);
    userEvent.click(searchIcon);

    const searchInput = getByTestId(SEARCH_INPUT);
    const searchFirstLetter = await findByTestId(FIRST_LETTER_RADIO);
    const searchButton = await findByTestId(SEARCH_BTN);

    userEvent.type(searchInput, FIRST_LETTERS);
    userEvent.click(searchFirstLetter);
    userEvent.click(searchButton);
    waitForExpect(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
