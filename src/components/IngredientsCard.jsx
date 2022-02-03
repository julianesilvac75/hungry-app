import React from 'react';
import PropTypes from 'prop-types';

function IngredientsCard({ name, image, index }) {
  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          style={ { width: '100px' } }
          src={ image }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <h2 data-testid={ `${index}-card-name` }>{ name }</h2>
      </button>
    </div>
  );
}

IngredientsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientsCard;
