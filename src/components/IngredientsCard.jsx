import React from 'react';

const index = 2;

function IngredientsCard() {
  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          src=""
          alt=""
          data-testid={ `${index}-card-img` }
        />
        <h2 data-testid={ `${index}-card-name` }>Ingrediente</h2>
      </button>
    </div>
  );
}

export default IngredientsCard;
