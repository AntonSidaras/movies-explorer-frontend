import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesCardListText } from "../../utils/constants";
import { areas } from '../../utils/constants';
import './MoviesCardList.css';

function MoviesCardList({ area, moviesCards, savedMovies, totalSize, onAddMore, onToggleSave, onDelete }) {

  const isAreaSaved = area === areas.areaSavedMovies;

  const handleAddMore = () => {
    onAddMore(window.innerWidth);
  }

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {moviesCards.map((item) => (
          <MoviesCard
            key={item.movieId}
            movieCard={item}
            savedMovies={savedMovies}
            isSaved={isAreaSaved}
            onToggleSave={onToggleSave}
            onDelete={onDelete}
          />
        ))}
      </div>
      <button
        className={`movies-card-list__button-more 
          ${isAreaSaved || moviesCards.length === 0 || moviesCards.length >= totalSize ? 'movies-card-list__button-more_hidden' : ''}`}
        onClick={handleAddMore}
      >
        {moviesCardListText.buttonMoreText}
      </button>
    </section>
  );
}

export default MoviesCardList;