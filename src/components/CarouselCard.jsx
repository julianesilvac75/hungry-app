import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { SIX } from '../services/constants';

function CarouselCard({ recipeDetails }) {
  console.log(recipeDetails);

  return (
    <Carousel>

      {
        recipeDetails
          .filter((item, i) => i < SIX)
          .map(({ name, category, image }) => (
            <Carousel.Item key={ name }>
              <img src={ image } alt={ name } />
              <p>{ category }</p>
              <h3>{ name }</h3>
            </Carousel.Item>
          ))
      }

    </Carousel>
  );
}

CarouselCard.propTypes = {
  recipeDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselCard;
