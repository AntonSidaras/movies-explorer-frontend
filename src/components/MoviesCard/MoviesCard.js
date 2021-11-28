import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import './MoviesCard.css';

function MoviesCard({ movieCard, isSaved, onDeleteMoviesCard, onToggleSaveMovieCard }) {

  const user = React.useContext(CurrentUserContext);
  const isAdded = movieCard.owner._id === user.currentUser._id;

  function handleDelete() {
    onDeleteMoviesCard(movieCard);
  }

  function handleToggleSave() {
    onToggleSaveMovieCard(movieCard);
  }

  const action = !isSaved ?
    <button className={`movies-card__add ${isAdded ? 'movies-card__add_active' : ''}`} type='button' onClick={handleToggleSave} /> :
    <button className='movies-card__remove' type='button' onClick={handleDelete} />;

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