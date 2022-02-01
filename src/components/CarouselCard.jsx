import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCard({ recipeDetails }) {
  const { name, image, category } = recipeDetails;

  return (
    <Carousel>
      <Carousel.Item>
        <img src={ image } alt={ name } style={ { width: '150px' } } />
        <p>{ category }</p>
        <h3>{ name }</h3>
      </Carousel.Item>
    </Carousel>
  );
}

CarouselCard.propTypes = {
  recipeDetails: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default CarouselCard;
