import React, { useState, useContext } from 'react';
import { REGEX_EMAIL, SIX } from '../services/constants';
import AppRecipesContext from '../context/AppRecipesContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setMealsToken, setCocktailsToken,
    setUserToken } = useContext(AppRecipesContext);

  const validated = REGEX_EMAIL.test(email) && password.length > SIX;

  const btnSubmit = () => {
    // const { history } = props;
    setMealsToken(1);
    setCocktailsToken(1);
    setUserToken({ email });
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        {' '}
        <input
          type="text"
          id="email"
          value={ email }
          data-testid="email-input"
          name="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>

      <label htmlFor="password">
        Senha:
        {' '}
        <input
          type="password"
          id="password"
          value={ password }
          data-testid="password-input"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !validated }
        onClick={ btnSubmit }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
