import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FiShare2 } from 'react-icons/fi';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppRecipesContext from '../context/AppRecipesContext';
import '../styles/DetailsCard.css';

const copy = require('clipboard-copy');

function DetailsCard({ recipeDetails }) {
  const { name,
    image,
    category,
    ingredients,
    measure,
    instructions,
    video,
    alcoholicOrNot,
    id,
    type,
    nationality,
  } = recipeDetails;

  const { pathname } = useLocation();
  const {
    setFavoriteRecipes,
    verifyFavorite } = useContext(AppRecipesContext);
  const [link, setLink] = useState(false);

  const handleFavoriteButton = () => {
    const newRecipe = { id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image };

    if (!verifyFavorite(id)) {
      return setFavoriteRecipes((prevState) => [...prevState, newRecipe]);
    }

    return setFavoriteRecipes((prevState) => (
      prevState.filter((recipe) => recipe.id !== id)));
  };

  return (
    <section className="details-card">
      <img
        alt={ name }
        src={ image }
        className="details-image"
        data-testid="recipe-photo"
      />
      <div className="title-container">
        <h1
          className="details-title"
          data-testid="recipe-title"
        >
          {name}
        </h1>
        <div>
          <button
            src={ shareIcon }
            type="button"
            data-testid="share-btn"
            onClick={ () => {
              copy(
                window.location.href,
              );
              setLink(true);
            } }
          >
            <FiShare2 className="icon icon-bg" />
            {/* <img
            alt="Share Icon"
            src={ shareIcon }
          /> */}

          </button>

          <button
            src={ verifyFavorite(id) ? blackHeartIcon : whiteHeartIcon }
            data-testid="favorite-btn"
            type="button"
            onClick={ handleFavoriteButton }
          >
            {
              verifyFavorite(id)
                ? (
                  <MdFavoriteBorder
                    className="icon icon-bg"
                  />) : <MdFavorite className="icon icon-bg" />
            }
            {/* <img
            alt="Favorite Icon"
            src={ verifyFavorite(id) ? blackHeartIcon : whiteHeartIcon }
          /> */}
          </button>

        </div>
      </div>
      <div className="details-section">

        {link && <p className="copied">Link copied!</p>}
        <p
          className="category"
          data-testid="recipe-category"
        >
          {pathname.includes('drink') ? alcoholicOrNot : category}

        </p>
        <div className="ingredients-list">
          <h2>Ingredients</h2>
          <ul>
            { ingredients.map((ingredient, index) => (
              <li
                className="ingredients"
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ `${ingredient[1]} - ${index}` }
              >
                { `${ingredient[1]} - ${measure[index] === undefined
                  ? '' : measure[index][1]}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="ingredients-list">
          <h2>Instructions</h2>
          <p data-testid="instructions">{instructions}</p>
          {video && <iframe
            title="Instructions"
            data-testid="video"
            src={ `https://www.youtube.com/embed/${video.split('v=')[1]}` }
          />}
        </div>
        <h2>Recommended</h2>

      </div>
    </section>);
}

DetailsCard.propTypes = {
  recipeDetails: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    instructions: PropTypes.string,
    video: PropTypes.string,
    id: PropTypes.string,
    nationality: PropTypes.string,
    type: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.array),
    measure: PropTypes.arrayOf(PropTypes.array),
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
};

export default DetailsCard;
