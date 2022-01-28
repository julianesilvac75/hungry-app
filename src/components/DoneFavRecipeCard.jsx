import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const index = 1;
const tagName = 1;

function DoneFavRecipeCard() {
  return (
    <section>

      <Link to="/foods/{id-da-receita}">
        <img data-testid={ `${index}-horizontal-image` } src="" alt="" />
      </Link>

      <p data-testid={ `${index}-horizontal-top-text` }>Index</p>

      <Link
        to="/foods/{id-da-receita}"
        data-testid={ `${index}-horizontal-name` }
      >
        Nome
      </Link>

      <p data-testid={ `${index}-horizontal-done-date` }>Data</p>

      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
      >
        <img
          src={ shareIcon }
          alt="Share Icon"
        />
      </button>

      <button
        type="button"
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      >
        Tag
      </button>

    </section>
  );
}

export default DoneFavRecipeCard;
