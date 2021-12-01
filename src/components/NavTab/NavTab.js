import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes, navText } from '../../utils/constants';
import './NavTab.css';

function NavTab() {

  return (
    <nav className='nav-tab'>
      <Link className='nav-tab__link' to={appRoutes.content.movies}>{navText.links.movies}</Link>
      <Link className='nav-tab__link' to={appRoutes.content.savedMovies}>{navText.links.savedMovies}</Link>
    </nav>
  );
}

export default NavTab;