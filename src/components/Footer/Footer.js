import React from 'react';
import { footerText } from '../../utils/constants';
import './Footer.css';

function Footer() {

  return (
    <footer className='footer'>
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