import React from 'react';

function ProgressCard() {
  return (
    <section>
      <img
        alt={ name }
        src={ image }
        style={ { width: '150px' } }
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        { name }
      </h1>
      <button
        src={ shareIcon }
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          copy(window.location.href);
          setLink(true);
        } }
      >
        <img
          alt="Share Icon"
          src={ shareIcon }
        />

      </button>

      { link && <p>Link copied!</p> }

      <button
        src={ verifyFavorite(id) ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        type="button"
        onClick={ handleFavoriteButton }
      >
        <img
          alt="Favorite Icon"
          src={ verifyFavorite(id) ? blackHeartIcon : whiteHeartIcon }
        />
      </button>

      <p
        data-testid="recipe-category"
      >
        { pathname.includes('drink') ? alcoholicOrNot : category }

      </p>

      <h2>Ingredients</h2>

      <select>
        { ingredients.map((ingredient, index) => {
          const value = `${ingredient[1]} - ${measure[index] === undefined
            ? '' : measure[index][1]}`;
          return (
            <label htmlFor={ ingredient[1] } key={ ingredient[1] }>
              <input
                value={ value }
                type="checkbox"
                id={ ingredient[1] }
                data-testid={ `${index}-ingredient-step` }
              />
              { value }
            </label>
          );
        }) }
      </select>

      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
    </section>);
}

export default ProgressCard;
