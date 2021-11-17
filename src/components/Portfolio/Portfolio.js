import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioText } from '../../utils/constants';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>{portfolioText.title}</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>{portfolioText.textItem.static}</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>{portfolioText.textItem.flex}</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>{portfolioText.textItem.app}</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;