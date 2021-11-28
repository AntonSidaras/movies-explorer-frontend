import React from 'react';
import { techsText } from '../../utils/constants';
import './Techs.css';

function Techs() {

  return (
    <section className='techs techs_background_signal-black'>
      <div className='techs__container'>
        <h2 className='techs__title'>{techsText.title}</h2>
        <h3 className='techs__main-title'>{techsText.mainTitle}</h3>
        <p className='techs__description'>{techsText.description}</p>
        <ul className='techs__list'>
          <li className='techs__item'>{techsText.items.html}</li>
          <li className='techs__item'>{techsText.items.css}</li>
          <li className='techs__item'>{techsText.items.js}</li>
          <li className='techs__item'>{techsText.items.react}</li>
          <li className='techs__item'>{techsText.items.git}</li>
          <li className='techs__item'>{techsText.items.express}</li>
          <li className='techs__item'>{techsText.items.mongo}</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;