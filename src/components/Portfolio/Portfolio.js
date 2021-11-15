import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>
        Поротфолио
      </h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>Статичный сайт</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>Адаптивный сайт</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/#'>
            <h3 className='portfolio__text'>Одностаничное приложение</h3>
            <span className='portfolio__arrow'></span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;