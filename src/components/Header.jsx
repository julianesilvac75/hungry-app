import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ titleHeader, isVisible = true }) {
  const [toggle, setToggle] = useState(false);

  return (
    <header>

      <Link
        to="/profile"
        src={ profileIcon }
        data-testid="profile-top-btn"
      >
        <img
          src={ profileIcon }
          alt="Profile Icon"
        />
      </Link>

      <h1 data-testid="page-title">{ titleHeader }</h1>

      {
        isVisible && (
          <button
            type="button"
            src={ searchIcon }
            onClick={ () => setToggle(!toggle) }
            data-testid="search-top-btn"
          >
            <img
              src={ searchIcon }
              alt="Search Icon"
            />
          </button>
        )
      }

      { toggle && <SearchBar /> }

    </header>
  );
}

Header.propTypes = {
  titleHeader: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Header;
