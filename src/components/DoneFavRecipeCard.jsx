import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppRecipesContext from '../context/AppRecipesContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function DoneFavRecipeCard(props) {
  const { setFavoriteRecipes } = useContext(AppRecipesContext);
  const [link, setLink] = useState(false);
  const { image,
    index,
    alcoholicOrNot,
    category,
    id,
    doneDate,
    tags,
    type,
    nationality,
    name } = props;

  function urlLocation() {
    const { protocol, host } = window.location;
    return (`${protocol}//${host}/${type === 'food' ? 'foods' : 'drinks'}/${id}`);
  }

  function handleFavoriteButton() {
    return setFavoriteRecipes((prevState) => (
      prevState.filter((recipe) => recipe.id !== id)));
  }

  return (
    <section>

      <Link to={ `/${type === 'food' ? 'foods' : 'drinks'}/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          style={ { width: '100px' } }
        />
      </Link>

      <p data-testid={ `${index}-horizontal-top-text` }>
        { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot }
      </p>
      <Link
        to={ `/${type === 'food' ? 'foods' : 'drinks'}/${id}` }
        data-testid={ `${index}-horizontal-name` }
      >
        { name }
      </Link>

      <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>

      <button
        type="button"
        onClick={ () => {
          copy(urlLocation());
          setLink(true);
        } }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share Icon"
        />
      </button>

      { link && <p>Link copied!</p> }

      <button
        type="button"
        onClick={ handleFavoriteButton }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="Favorite Icon"
        />
      </button>

      { (tags !== '' && tags) && tags.map((tag) => (
        <button
          key={ tag }
          type="button"
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          { tag }
        </button>
      )) }

    </section>
  );
}

DoneFavRecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  doneDate: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneFavRecipeCard;
