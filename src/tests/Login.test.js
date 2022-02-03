import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './index';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const BTN_LOGIN_SUBMIT = 'login-submit-btn';

const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '1234567';
const INVALID_EMAIL = 'alguem@email.';
const INVALID_EMAIL_1 = 'alguem';
const INVALID_PASSWORD = '12345';

describe('Login Page', () => {
  test('1- Verifica se existe input de email e senha', () => {
    const { getByTestId } = renderWithRouter(<App />, '/');

    const email = getByTestId(EMAIL_INPUT);
    const password = getByTestId(PASSWORD_INPUT);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('2-Verifica se existe botão Entrar', () => {
    const { getByTestId } = renderWithRouter(<App />, '/');

    const loginSubmitBtn = getByTestId(BTN_LOGIN_SUBMIT);

    expect(loginSubmitBtn).toBeInTheDocument();
  });

  test('3-Verifica se botão habilita caso email e senha seja válido ', () => {
    const { getByTestId } = renderWithRouter(<App />, '/');
    const loginSubmitBtn = getByTestId(BTN_LOGIN_SUBMIT);
    expect(loginSubmitBtn).toBeDisabled();

    const email = getByTestId(EMAIL_INPUT);
    const password = getByTestId(PASSWORD_INPUT);

    userEvent.type(email, INVALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_1);
    userEvent.type(password, VALID_PASSWORD);
    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, INVALID_PASSWORD);
    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(loginSubmitBtn).toBeEnabled();
  });

  test('4-Verifica se botão quando habilitado vai para rota /foods', async () => {
    const { getByTestId } = renderWithRouter(<App />, '/');

    const email = getByTestId(EMAIL_INPUT);
    const password = getByTestId(PASSWORD_INPUT);
    const loginSubmitBtn = getByTestId(BTN_LOGIN_SUBMIT);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);

    userEvent.click(loginSubmitBtn);
    const recipes = getByTestId('page-title');
    expect(recipes).toContainHTML('Foods');
  });
});
