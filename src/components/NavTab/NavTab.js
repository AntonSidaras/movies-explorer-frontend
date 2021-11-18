import React from 'react';
import { Link } from 'react-router-dom';
import { navTabText } from '../../utils/constants';
import './NavTab.css';

function NavTab() {

  return (
    <nav className='navigation'>
      <Link className='navigation__link' to='/movies'>{navTabText.links.movies}</Link>
      <Link className='navigation__link' to='/saved-movies'>{navTabText.links.savedMovies}</Link>
    </nav>
  );
}

export default NavTab;