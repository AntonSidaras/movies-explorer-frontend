import React from "react";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import { moviesCardAlt } from "../../utils/constants";
import './MoviesCard.css';

function MoviesCard({ movieCard, savedMovies, isSaved, onToggleSave, onDelete }) {

  const getTimeFromMins = (duration) => Math.trunc(duration / 60) + 'ч ' + (duration % 60) + 'м';

  const handleDelete = () => {
    onDelete(movieCard);
  }

  const action = !isSaved ?
    <SaveCheckbox movieCard={movieCard} savedMovies={savedMovies} onToggleSave={onToggleSave} /> :
    <button
      className='movies-card__remove'
      type='button'
      onClick={handleDelete}
    />;

  return (
    <div className='movies-card' id={movieCard.movieId}>
      <div className='movies-card__col'>
        <a className='movies-card__link' target='_blank' rel='noopener noreferrer' href={movieCard.trailer}>
          <img className='movies-card__img' src={movieCard.image} alt={moviesCardAlt} />
        </a>
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