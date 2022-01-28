import PropTypes from 'prop-types';
import React from 'react';

function RecipesCard({ index, url, name }) {
  return (
    <section data-testid={ `${index}-recipe-card` } style={ { width: '100px' } }>
      <img
        src={ url }
        alt={ name }
        style={ { maxWidth: '100%' } }
        data-testid={ `${index}-card-img` }
      />
      <h2
        data-testid={ `${index}-card-name` }
      >
        { name }

      </h2>
    </section>);
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default RecipesCard;
