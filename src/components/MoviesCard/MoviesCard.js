import React from "react";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import { moviesCardAlt, moviesServerRoot } from "../../utils/constants";
import './MoviesCard.css';

function MoviesCard({ movieCard, isSaved }) {

  const getTimeFromMins = (duration) => Math.trunc(duration / 60) + 'ч ' + (duration % 60) + 'м';

  const action = !isSaved ?
    <SaveCheckbox movieCard={movieCard} /> :
    <button className='movies-card__remove' type='button' />;

  return (
    <div className='movies-card' id={movieCard.id}>
      <div className='movies-card__col'>
        <img className='movies-card__img' src={`${moviesServerRoot}${movieCard.image.url}`} alt={moviesCardAlt} />
        <div className='movies-card__row'>
          <h2 className='movies-card__title'>{movieCard.nameRU}</h2>
          {action}
        </div>
        <span className='movies-card__time'>{getTimeFromMins(movieCard.duration)}</span>
      </div>
    </div>
  );
}

export default MoviesCard;