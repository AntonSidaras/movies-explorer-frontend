import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ isOpened, data, onClose }) {
  return (
    <section className={`info-tooltip ${isOpened ? 'info-tooltip_opened' : ''}`}>
      <div className='info-tooltip__container'>
        <div className='info-tooltip__reply-icon' style={{ backgroundImage: `url(${data.image})` }} />
        <h2 className='info-tooltip__title'>{data.title}</h2>
        {
          data.texts.map((item, index) => (
            <p key={index} className='info-tooltip__reply-text'>{item}</p>
          ))
        }
        <button className='info-tooltip__close-button' type='button' onClick={onClose}></button>
      </div>
    </section>
  );
}

export default InfoTooltip;