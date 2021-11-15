import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__bottom'>
        <span className='footer__copyright'>&#169; {new Date().getFullYear()}</span>
        <ul className='footer__list'>
          <li className='footer__item'>
            <Link className='footer__link' to='/#'>Яндекс.Практикум</Link>
          </li>
          <li className='footer__item'>
            <Link className='footer__link' to='/#'>GitHub</Link>
          </li>
          <li className='footer__item'>
            <Link className='footer__link' to='/#'>VK</Link>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;