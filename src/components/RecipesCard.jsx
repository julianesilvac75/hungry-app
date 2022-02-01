import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function RecipesCard({ index, url, name, id }) {
  const { pathname } = useLocation();
  return (
    <Link to={ `${pathname}/${id}` } data-testid={ `${index}-recipe-card` }>
      <section style={ { width: '100px' } }>
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
      </section>
    </Link>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipesCard;
