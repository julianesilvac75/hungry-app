import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import AppRecipesContext from '../context/AppRecipesContext';

const copy = require('clipboard-copy');

function DetailsCard({ recipeDetails }) {
  const { name,
    image,
    category,
    ingredients,
    measure,
    instructions,
    video,
    alcoholic,
  } = recipeDetails;

  const { pathname } = useLocation();
  // const { favoriteRecipes, setFavoriteRecipes } = useContext(AppRecipesContext);
  const [favorite, setFavorite] = useState(false);
  const [link, setLink] = useState(false);

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
        {name}
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

      {link && <p>Link copied!</p>}

      <button
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        type="button"
        onClick={ () => setFavorite((prevState) => !prevState) }
      >
        <img
          alt="Favorite Icon"
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
        />
      </button>

      <p
        data-testid="recipe-category"
      >
        {pathname.includes('drink') ? alcoholic : category}

      </p>
      <h2>Ingredients</h2>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ ingredient[1] }
          >
            { `${ingredient[1]} - ${measure[index] === undefined
              ? '' : measure[index][1]}`}
          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{instructions}</p>
      {video && <iframe
        title="Instructions"
        data-testid="video"
        src={ `https://www.youtube.com/embed/${video.split('v=')[1]}` }
      />}
      <h2>Recommended</h2>
    </section>);
}

DetailsCard.propTypes = {
  recipeDetails: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    instructions: PropTypes.string,
    video: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.array),
    measure: PropTypes.arrayOf(PropTypes.array),
    alcoholic: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsCard;
