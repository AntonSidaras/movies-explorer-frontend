import React from "react";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import './MoviesCard.css';

function MoviesCard({ movieCard, isSaved }) {

  const action = !isSaved ?
    <SaveCheckbox movieCard={movieCard} /> :
    <button className='movies-card__remove' type='button' />;

  return (
    <div className='movies-card' id={movieCard._id}>
      <div className='movies-card__col'>
        <img className='movies-card__img' src={movieCard.image} alt='img' />
        <div className='movies-card__row'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          {action}
        </div>
        <span className='movies-card__time'>1ч 42м</span>
      </div>
    </div>
  );
}

export default MoviesCard;