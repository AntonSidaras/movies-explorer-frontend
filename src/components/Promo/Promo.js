import React from 'react';
import { promoText } from '../../utils/constants';
import './Promo.css';

function Promo() {

  return (
    <section className='promo promo_background_eagle-green'>
      <div className='promo__container'>
        <h1 className='promo__title'>{promoText.title}</h1>
        <div className='promo__curve'></div>
      </div>
    </section>
  );
}

export default Promo;