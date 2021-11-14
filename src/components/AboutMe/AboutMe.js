import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/aboutme/me.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <article className='about-me__about'>
          <h3 className='about-me__name'>Антон</h3>
          <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
            а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className='about-me__links'>
            <li>
              <Link to='#'>VK</Link>
            </li>
            <li>
              <Link to='#'>GitHub</Link>
            </li>
          </ul>
        </article>
        <div className='about-me__image-container'>
          <img className='about-me__image' src={avatar} alt='Anton Sidaras' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;