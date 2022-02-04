import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/RecipesCard.css';

function RecipesCard({ index, url, name, id }) {
  const { pathname } = useLocation();
  const test = pathname.includes('nationalities');
  return (
    <Link
      to={ test ? `/foods/${id}` : `${pathname}/${id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <section className="recipe-card">
        <img
          className="recipe-image"
          src={ url }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <h2
          className="recipe-title"
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
