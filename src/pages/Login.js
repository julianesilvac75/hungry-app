import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { REGEX_EMAIL, SIX } from '../services/constants';
import AppRecipesContext from '../context/AppRecipesContext';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setMealsToken, setCocktailsToken } = useContext(AppRecipesContext);

  const validated = REGEX_EMAIL.test(email) && password.length > SIX;

  const btnSubmit = () => {
    const { history } = props;
    setMealsToken(1);
    setCocktailsToken(1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('./foods');
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
