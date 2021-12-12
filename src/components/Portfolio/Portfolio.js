import React from 'react';
import { portfolioText } from '../../utils/constants';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>{portfolioText.title}</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' rel='noopener noreferrer' href={portfolioText.to.static}>
            <h3 className='portfolio__text'>{portfolioText.textItem.static}</h3>
            <span className='portfolio__arrow'></span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' rel='noopener noreferrer' href={portfolioText.to.flex}>
            <h3 className='portfolio__text'>{portfolioText.textItem.flex}</h3>
            <span className='portfolio__arrow'></span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' rel='noopener noreferrer' href={portfolioText.to.app}>
            <h3 className='portfolio__text'>{portfolioText.textItem.app}</h3>
            <span className='portfolio__arrow'></span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;