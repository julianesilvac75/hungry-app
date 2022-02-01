import React from 'react';

function IngredientsCard() {
  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-ingredient-card` }
        onClick="olá"
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
