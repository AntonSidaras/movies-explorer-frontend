import React from 'react';
import { areas, footerText } from '../../utils/constants';
import './Footer.css';

function Footer({ area }) {

  const isAreaMovies = (area === areas.areaMovies) || (area === areas.areaSavedMovies);

  return (
    <footer className={`footer ${!isAreaMovies ? '' : 'footer_area_movies'}`}>
      <h3 className='footer__title'>{footerText.title}</h3>
      <div className='footer__bottom'>
        <span className='footer__copyright'>&#169; {footerText.copyright}</span>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a className='footer__link' target='_blank' rel='noopener noreferrer' href={footerText.to.yandex}>{footerText.links.yandex}</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' target='_blank' rel='noopener noreferrer' href={footerText.to.git}>{footerText.links.git}</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' target='_blank' rel='noopener noreferrer' href={footerText.to.vk}>{footerText.links.vk}</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;