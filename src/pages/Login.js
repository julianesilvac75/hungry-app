import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          data-testid="email-input"
        />
      </label>

      <label htmlFor="password">
        Senha:
        <input
          type="text"
          id="password"
          data-testid="password-input"
        />
      </label>

      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;

// const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
