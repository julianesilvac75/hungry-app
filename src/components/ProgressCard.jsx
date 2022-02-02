import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppRecipesContext from '../context/AppRecipesContext';

const copy = require('clipboard-copy');

function ProgressCard({ progressRecipe }) {
  const {
    setFavoriteRecipes,
    verifyFavorite,
    inProgressRecipes,
    setInProgressRecipes,
  } = useContext(AppRecipesContext);

  const { name,
    image, ingredients, type, nationality,
    instructions, id, category, measure, alcoholicOrNot } = progressRecipe;

  const { pathname } = useLocation();
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

  function whichType() {
    return type === 'food' ? 'meals' : 'cocktails';
  }

  function saveUsedIgredients(value) {
    const arrId = inProgressRecipes[whichType()][id] || [];
    const newObj = { ...inProgressRecipes,
      [whichType()]: { [id]: [...arrId, value] } };
    return setInProgressRecipes(newObj);
  }

  function checkIngredients(value) {
    if (inProgressRecipes[whichType()][id]) {
      return inProgressRecipes[whichType()][id]
        .some((item) => item === value);
    }
    return false;
  }

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
          copy((window.location.href).split('/in')[0]);
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
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        { ingredients.map((ingredient, index) => {
          const value = `${ingredient[1]} - ${measure[index] === undefined
            ? '' : measure[index][1]}`;
          return (
            <label
              htmlFor={ ingredient[1] }
              key={ ingredient[1] }
              data-testid={ `${index}-ingredient-step` }
              style={ checkIngredients(value) ? { textDecoration: 'line-through' } : {} }
            >
              <input
                onChange={ () => saveUsedIgredients(value) }
                value={ value }
                type="checkbox"
                id={ ingredient[1] }
                checked={ checkIngredients(value) }
              />
              { value }
            </label>
          );
        }) }
      </div>

      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish Recipe
      </button>
    </section>);
}

ProgressCard.propTypes = {
  progressRecipe: PropTypes.shape({
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

export default ProgressCard;
