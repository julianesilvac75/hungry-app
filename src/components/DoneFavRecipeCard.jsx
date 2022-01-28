import React from 'react';
import shareIcon from '../images/shareIcon.svg';

const index = 1;

function DoneFavRecipeCard() {
  return (
    <section>
      <img data-testid={ `${index}-horizontal-image` } src="" alt="" />
      <p data-testid={ `${index}-horizontal-top-text` }>Index</p>
      <p data-testid={ `${index}-horizontal-name` }>Nome</p>
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
        data-testid={ `${index}-horizontal-share-btn` }
      >
        X

      </button>

      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
      >
        X

      </button>

    </section>
  );
}

export default DoneFavRecipeCard;
