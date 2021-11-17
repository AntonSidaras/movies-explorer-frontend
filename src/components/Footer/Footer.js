import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link className='footer__link' to='/#'>{footerText.links.yandex}</Link>
          </li>
          <li className='footer__item'>
            <Link className='footer__link' to='/#'>{footerText.links.git}</Link>
          </li>
          <li className='footer__item'>
            <Link className='footer__link' to='/#'>{footerText.links.vk}</Link>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;