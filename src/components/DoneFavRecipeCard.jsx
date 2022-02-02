import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function DoneFavRecipeCard(props) {
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

  console.log(tags);

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
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>

      <p data-testid={ `${index}-horizontal-name` }>{name}</p>

      <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>

      <button
        type="button"
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share Icon"
        />
      </button>

      { tags.map((tag) => (
        <button
          key={ tag }
          type="button"
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          { tag }
        </button>
      ))}

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
