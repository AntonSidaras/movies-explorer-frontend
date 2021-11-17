import React from 'react';
import { aboutProjectText } from '../../utils/constants';
import './AboutProject.css';

function AboutProjects() {

  return (
    <section className='about-project'>
      <h2 className='about-project__title'>{aboutProjectText.title}</h2>
      <article className='about-project__info'>
        <p className='about-project__subtitle'>{aboutProjectText.subtitle.stages}</p>
        <p className='about-project__subtitle'>{aboutProjectText.subtitle.duration}</p>
        <p className='about-project__text'>{aboutProjectText.text.plan}</p>
        <p className='about-project__text'>{aboutProjectText.text.deadline}</p>
      </article>
      <div className='about-project__progress'>
        <div className='about-project__one-week'>
          <span className='about-project__week-text'>{aboutProjectText.weeks.one}</span>
        </div>
        <div className='about-project__four-weeks'>
          <span className='about-project__week-text about-project__week-text_color_white'>{aboutProjectText.weeks.four}</span>
        </div>
        <span className='about-project__stack'>{aboutProjectText.stack.back}</span>
        <span className='about-project__stack'>{aboutProjectText.stack.front}</span>
      </div>
    </section>
  );
}

export default AboutProjects;