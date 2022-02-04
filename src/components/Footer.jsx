import React from 'react';
import { Link } from 'react-router-dom';
import { GiKnifeFork, GiCompass } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link to="/drinks">
        <button
          data-testid="drinks-bottom-btn"
          type="button"
          src={ drinkIcon }
        >
          <BiDrink className="icon icon-size" />
          {/* <img
            src={ drinkIcon }
            alt="Drink Icon"
          /> */}
        </button>
      </Link>

      <Link to="/explore">
        <button
          data-testid="explore-bottom-btn"
          type="button"
          src={ exploreIcon }
        >
          <GiCompass className="icon icon-size" />
          {/* <img
            src={ exploreIcon }
            alt="Explore Icon"
          /> */}
        </button>

      </Link>
      <Link to="/foods">
        <button
          data-testid="food-bottom-btn"
          type="button"
          src={ mealIcon }
        >
          <GiKnifeFork className="icon icon-size" />
          {/* <img
            src={ mealIcon }
            alt="Meal Icon"
          /> */}
        </button>
      </Link>
    </footer>);
}

export default Footer;
