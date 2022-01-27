import React, { useState } from 'react';
import { REGEX_EMAIL, SIX } from '../services/constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validated = REGEX_EMAIL.test(email) && password.length > SIX;

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          value={ email }
          data-testid="email-input"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>

      <label htmlFor="password">
        Senha:
        <input
          type="password"
          id="password"
          value={ password }
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !validated }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
