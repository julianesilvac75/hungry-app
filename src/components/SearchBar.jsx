import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
      />
    </form>
  );
}

export default SearchBar;
