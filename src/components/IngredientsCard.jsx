import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import AppRecipesContext from '../context/AppRecipesContext';

function IngredientsCard({ name, image, index }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const { setIngredientFood, setIngredientDrink } = useContext(AppRecipesContext);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-ingredient-card` }
        onClick={ () => {
          const pathToGo = `/${pathname.split('/')[2]}`;
          if (pathToGo === '/foods') {
            setIngredientFood(name);
          }

          if (pathToGo === '/drinks') {
            setIngredientDrink(name);
          }

          history.push(pathToGo);
        } }
      >
        <img
          style={ { width: '100px' } }
          src={ image }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <h2 data-testid={ `${index}-card-name` }>{ name }</h2>
      </button>
    </div>
  );
}

IngredientsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientsCard;
