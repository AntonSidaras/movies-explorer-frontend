import React from 'react';
import { Link } from 'react-router-dom';
import { areas, appRoutes, navText } from '../../utils/constants';
import './Navigation.css';

function Navigation({ area, isOpened, onToggleNavigation }) {

  const isAreaMovies = area === areas.areaMovies;
  const isAreaSavedMovies = area === areas.areaSavedMovies;
  const isAreaProfile = area === areas.areaProfile;

  function handleCloseNavigation() {
    onToggleNavigation();
  }

  return (
    <section className={`navigation ${isOpened ? 'navigation_opened' : ''}`}>
      <div className='navigation__container'>
        <button className='navigation__close-button' onClick={handleCloseNavigation} />
        <div className='navigation__content'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link className='navigation__link' to={appRoutes.root}>
                {navText.links.root}
              </Link>
            </li>
            <li className={`navigation__item ${isAreaMovies ? 'navigation__item_type_current' : ''}`}>
              <Link
                className={`navigation__link ${isAreaMovies ? 'navigation__link_type_current' : ''}`}
                to={appRoutes.content.movies}
                onClick={handleCloseNavigation}
              >
                {navText.links.movies}
              </Link>
            </li>
            <li className={`navigation__item ${isAreaSavedMovies ? 'navigation__item_type_current' : ''}`}>
              <Link
                className={`navigation__link ${isAreaSavedMovies ? 'navigation__link_type_current' : ''}`}
                to={appRoutes.content.savedMovies}
                onClick={handleCloseNavigation}
              >
                {navText.links.savedMovies}
              </Link>
            </li>
          </ul>
          <Link className={`navigation__account-link ${isAreaProfile ? 'navigation__account-link_type_current' : ''}`} to={appRoutes.profile} />
        </div>
      </div>
    </section>
  );
}

export default Navigation;