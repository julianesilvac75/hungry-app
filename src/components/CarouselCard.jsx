import React from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-bootstrap/Carousel';
import { SIX } from '../services/constants';

function CarouselCard({ recipeDetails }) {
  return (

    <div style={ { overflowX: 'scroll', display: 'flex', gap: '20px' } }>
      {
        recipeDetails
          .filter((item, i) => i < SIX)
          .map(({ name, category, image }, i) => (
            <div key={ name } data-testid={ `${i}-recomendation-card` }>
              <img src={ image } alt={ name } style={ { width: '160px ' } } />
              <p>{ category }</p>
              <h3 data-testid={ `${i}-recomendation-title` }>{ name }</h3>
            </div>
          ))
      }
    </div>

  // <Carousel>

  //   <Carousel.Item>
  //     <div data-testid="0-recomendation-card">
  //       <img
  //         src={ recipeDetails[0].image }
  //         alt={ recipeDetails[0].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[0].category }</p>
  //       <h3 data-testid="0-recomendation-title">{ recipeDetails[0].name }</h3>
  //     </div>

  //     <div data-testid="1-recomendation-card">
  //       <img
  //         src={ recipeDetails[1].image }
  //         alt={ recipeDetails[1].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[1].category }</p>
  //       <h3 data-testid="1-recomendation-title">{ recipeDetails[1].name }</h3>
  //     </div>

  //   </Carousel.Item>

  //   <Carousel.Item>
  //     <div data-testid="2-recomendation-card">
  //       <img
  //         src={ recipeDetails[2].image }
  //         alt={ recipeDetails[2].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[2].category }</p>
  //       <h3 data-testid="2-recomendation-title">{ recipeDetails[2].name }</h3>
  //     </div>

  //     <div data-testid="3-recomendation-card">
  //       <img
  //         src={ recipeDetails[3].image }
  //         alt={ recipeDetails[3].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[3].category }</p>
  //       <h3 data-testid="3-recomendation-title">{ recipeDetails[3].name }</h3>
  //     </div>

  //   </Carousel.Item>

  //   <Carousel.Item>
  //     <div data-testid="4-recomendation-card">
  //       <img
  //         src={ recipeDetails[4].image }
  //         alt={ recipeDetails[4].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[4].category }</p>
  //       <h3 data-testid="4-recomendation-title">{ recipeDetails[4].name }</h3>
  //     </div>

  //     <div data-testid="5-recomendation-card">
  //       <img
  //         src={ recipeDetails[5].image }
  //         alt={ recipeDetails[5].name }
  //         style={ { width: '100px' } }
  //       />
  //       <p>{ recipeDetails[5].category }</p>
  //       <h3 data-testid="5-recomendation-title">{ recipeDetails[5].name }</h3>
  //     </div>

  //   </Carousel.Item>

  //   {
  //     recipeDetails
  //       .filter((item, i) => i < SIX)
  //       .map(({ name, category, image }) => (
  //         <Carousel.Item key={ name }>
  //           <img src={ image } alt={ name } />
  //           <p>{ category }</p>
  //           <h3>{ name }</h3>
  //         </Carousel.Item>
  //       ))
  //   }

  // </Carousel>
  );
}

CarouselCard.propTypes = {
  recipeDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselCard;
