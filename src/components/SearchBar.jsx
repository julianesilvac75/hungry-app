import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
      />

      <label
        htmlFor="ingredient"
      >
        Ingredient
        <input
          type="radio"
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
        />
      </label>

      <label
        htmlFor="name"
      >
        Name
        <input
          type="radio"
          id="name"
          value="name"
          data-testid="name-search-radio"
        />
      </label>

      <label
        htmlFor="first-letter"
      >
        First Letter
        <input
          type="radio"
          id="first-letter"
          value="first-letter"
          data-testid="first-letter-search-radio"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>

    </form>
  );
}

export default SearchBar;
