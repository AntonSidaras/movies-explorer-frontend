import React from "react";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import './MoviesCard.css';

function MoviesCard({ data }) {

  return (
    <div className='movies-card' id={data.id}>
      <div className='movies-card__col'>
        <img className='movies-card__img' src={data.url} alt='img' />
        <div className='movies-card__row'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <SaveCheckbox id={data.id} />
        </div>
        <span className='movies-card__time'>1ч 42м</span>
      </div>
    </div>
  );
}

export default MoviesCard;