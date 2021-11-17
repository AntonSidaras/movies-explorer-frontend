import React from 'react';
import { Link } from 'react-router-dom';
import { aboutMeText } from '../../utils/constants';
import avatar from '../../images/aboutme/me.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className='about-me'>
      <h2 className='about-me__title'>{aboutMeText.title}</h2>
      <div className='about-me__info'>
        <article className='about-me__about'>
          <h3 className='about-me__name'>{aboutMeText.name}</h3>
          <p className='about-me__profession'>{aboutMeText.info}</p>
          <p className='about-me__description'>{aboutMeText.description}</p>
          <ul className='about-me__list'>
            <li className='about-me__item'>
              <Link className='about-me__link' to='#'>{aboutMeText.links.vk}</Link>
            </li>
            <li className='about-me__item'>
              <Link className='about-me__link' to='#'>{aboutMeText.links.git}</Link>
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