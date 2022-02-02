import React from 'react';
import PropTypes from 'prop-types';

function FilterButtons({ setFilterButton }) {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilterButton('All') }
      >
        All

      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilterButton('Food') }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilterButton('Drinks') }
      >
        Drinks
      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  setFilterButton: PropTypes.func.isRequired,
};

export default FilterButtons;
