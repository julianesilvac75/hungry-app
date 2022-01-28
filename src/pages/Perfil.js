import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  return (
    <div>
      <Header titleHeader="Profile" isVisible={ false } />
      <p
        data-testid="profile-email"
      >
        email
      </p>
      <Link
        to="/done-recipes"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </Link>
      <Link
        to="/favorite-recipes"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </Link>
      <Link
        to="/"
        data-testid="profile-logout-btn"
      >
        Logout
      </Link>
      <Footer />
    </div>
  );
}

export default Perfil;
