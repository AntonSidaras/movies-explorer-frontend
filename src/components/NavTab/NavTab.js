import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes, navTabText } from '../../utils/constants';
import './NavTab.css';

function NavTab() {

  return (
    <nav className='navigation'>
      <Link className='navigation__link' to={appRoutes.content.movies}>{navTabText.links.movies}</Link>
      <Link className='navigation__link' to={appRoutes.content.savedMovies}>{navTabText.links.savedMovies}</Link>
    </nav>
  );
}

export default NavTab;