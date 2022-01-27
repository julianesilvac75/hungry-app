import React from 'react';

function Header() {
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        X
      </button>
      <h1 data-testid="page-title">Foods</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        X
      </button>
    </header>
  );
}

export default Header;
