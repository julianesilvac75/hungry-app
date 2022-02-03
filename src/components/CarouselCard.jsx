import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { SIX } from '../services/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselCard({ recipeDetails }) {
  // ref: http://kenwheeler.github.io/slick/
  // ref: https://react-slick.neostack.com/
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div>

      <Slider { ...settings }>
        {
          recipeDetails
            .filter((_item, i) => i < SIX)
            .map(({ name, category, image }, i) => (
              <div
                key={ name }
                data-testid={ `${i}-recomendation-card` }
              >
                <img src={ image } alt={ name } style={ { width: '160px ' } } />
                <p>{ category }</p>
                <h3 data-testid={ `${i}-recomendation-title` }>{ name }</h3>
              </div>
            ))
        }
      </Slider>
    </div>
  );
}

CarouselCard.propTypes = {
  recipeDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselCard;
