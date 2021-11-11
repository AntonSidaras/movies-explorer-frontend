import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {

  return (
    <nav className='navigation'>
      <Link className='navigation__link' to='/movies'>Фильмы</Link>
      <Link className='navigation__link' to='/saved-movies'>Сохранённые Фильмы</Link>
    </nav>
  );
}

export default NavTab;