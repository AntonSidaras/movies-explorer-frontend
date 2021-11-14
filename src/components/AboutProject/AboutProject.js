import React from 'react';
import './AboutProject.css';

function AboutProjects() {

  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <article className='about-project__info'>
        <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
        <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
      <div className='about-project__progress'>
        <div className='about-project__one-week'>
          <span className='about-project__week-text'>1 неделя</span>
        </div>
        <div className='about-project__four-weeks'>
          <span className='about-project__week-text about-project__week-text_color_white'>4 недели</span>
        </div>
        <span className='about-project__stack'>Back-end</span>
        <span className='about-project__stack'>Front-end</span>
      </div>
    </section>
  );
}

export default AboutProjects;