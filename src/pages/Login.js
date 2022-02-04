import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { REGEX_EMAIL, SIX } from '../services/constants';
import AppRecipesContext from '../context/AppRecipesContext';
import '../styles/Login.css';

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
    <section className="login-page">
      <h1 className="login-title">HungryApp</h1>
      <form className="login-form">
        <div>
          <FaUserAlt />
          <input
            type="text"
            id="email"
            value={ email }
            data-testid="email-input"
            placeholder="example@example.com"
            name="email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div>
          <RiLockPasswordFill />
          <input
            type="password"
            id="password"
            value={ password }
            data-testid="password-input"
            name="password"
            placeholder="Your password"
            onChange={ (e) => setPassword(e.target.value) }
          />

        </div>

        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !validated }
          onClick={ btnSubmit }
        >
          Login
        </button>
      </form>

    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
