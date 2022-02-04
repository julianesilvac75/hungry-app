/* eslint-disable react/jsx-max-props-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { FaRegUser } from 'react-icons/fa';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import '../styles/Header.css';

function Header({ titleHeader, isVisible = true, getRecipesFromApi, fixTitleSize }) {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className={ `container ${!isVisible && 'fix-container'}` }>
        <Link
          to="/profile"
          src={ profileIcon }
          data-testid="profile-top-btn"
        >
          <FaRegUser className="icon" />
          {/* <img
            src={ profileIcon }
            alt="Profile Icon"
          /> */}
        </Link>

        <h1
          data-testid="page-title"
          className={ `header-title ${!isVisible && 'fix-title'} ${fixTitleSize}` }
        >
          { titleHeader }

        </h1>

        {
          isVisible && (
            <button
              type="button"
              className="link"
              src={ searchIcon }
              onClick={ () => setToggle(!toggle) }
              data-testid="search-top-btn"
            >
              <ImSearch className="icon" />
              {/* <img
                src={ searchIcon }
                alt="Search Icon"
              /> */}
            </button>
          )
        }
      </div>

      { toggle && <SearchBar getRecipesFromApi={ getRecipesFromApi } /> }

    </header>
  );
}

Header.propTypes = {
  titleHeader: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  fixTitleSize: PropTypes.string,
  getRecipesFromApi: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Header.defaultProps = { getRecipesFromApi: '', fixTitleSize: '' };

export default Header;
