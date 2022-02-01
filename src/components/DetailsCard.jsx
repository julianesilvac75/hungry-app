import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DetailsCard({ recipeDetails }) {
  const { name,
    image,
    category,
    ingredients,
    measure,
    instructions,
    video } = recipeDetails;

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
      <img
        alt="Share Icon"
        src={ shareIcon }
        data-testid="share-btn"
      />
      <img
        alt="Favorite Icon"
        src={ whiteHeartIcon }
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">{category}</p>
      <h2>Ingredients</h2>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ ingredient[1] }
          >
            { `${ingredient[1]} - ${measure[index][1]}`}
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
      <span data-testid="0-recomendation-card">Receitas recomendadas</span>
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
  }).isRequired,
};

export default DetailsCard;
