import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explorar.css';

function Explorar() {
  return (
    <div>
      <Header titleHeader="Explore" isVisible={ false } />
      <div className="links-container">
        <Link
          to="/explore/foods"
          className="category-button explore"
          data-testid="explore-foods"
        >
          Explore Foods
        </Link>
        <Link
          to="/explore/drinks"
          className="category-button explore"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
