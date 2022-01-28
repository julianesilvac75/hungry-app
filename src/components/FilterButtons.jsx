import React from 'react';

function FilterButtons() {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All

      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Foods
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default FilterButtons;
