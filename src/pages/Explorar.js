import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  return (
    <div>
      <Header titleHeader="Explore" isVisible={ false } />
      <Link
        to="/explore/foods"
        data-testid="explore-foods"
      >
        Explore Foods
      </Link>
      <Link
        to="/explore/drinks"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;