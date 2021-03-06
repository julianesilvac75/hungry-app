import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { GiArchiveResearch } from 'react-icons/gi';
import { URLS } from '../services/constants';
import fetchAPI from '../services/api';
import '../styles/SearchBar.css';

function SearchBar({ getRecipesFromApi }) {
  const [input, setInput] = useState('');
  const [option, setOption] = useState('ingredient');
  const { pathname } = useLocation();

  function validateFirstLetter() {
    if (input.length > 1 && option === 'first-letter') {
      alert('Your search must have only 1 (one) character');// eslint-disable-line no-alert
      return false;
    }
    return true;
  }

  function btnHandler() {
    if (validateFirstLetter()) {
      const fetchUrl = URLS[pathname.substring(1)][option](input);
      fetchAPI(fetchUrl, getRecipesFromApi);
    }
  }

  function handleChange({ target }, callback) {
    callback(target.value);
  }

  return (
    <form className="search-bar-form">
      <div className="search-input">
        <GiArchiveResearch className="search-icon" />
        <input
          type="text"
          value={ input }
          data-testid="search-input"
          placeholder="Search Recipe"
          onChange={ (e) => handleChange(e, setInput) }
        />
      </div>

      <div className="filter-container">
        <label
          htmlFor="ingredient"
        >
          Ingredient
          <input
            type="radio"
            id="ingredient"
            name="search-filter"
            value="ingredient"
            data-testid="ingredient-search-radio"
            defaultChecked
            onChange={ (e) => handleChange(e, setOption) }
          />
        </label>

        <label
          htmlFor="name"
        >
          Name
          <input
            type="radio"
            id="name"
            name="search-filter"
            value="name"
            data-testid="name-search-radio"
            onChange={ (e) => handleChange(e, setOption) }
          />
        </label>

        <label
          htmlFor="first-letter"
        >
          First Letter
          <input
            type="radio"
            id="first-letter"
            name="search-filter"
            value="first-letter"
            data-testid="first-letter-search-radio"
            onChange={ (e) => handleChange(e, setOption) }
          />
        </label>
      </div>

      <button
        type="button"
        className="button"
        data-testid="exec-search-btn"
        disabled={ !input }
        onClick={ () => btnHandler() }
      >
        Search
      </button>

    </form>
  );
}

SearchBar.propTypes = {
  getRecipesFromApi: PropTypes.func.isRequired,
};

export default SearchBar;
