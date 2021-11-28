import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesCardListText } from "../../utils/constants";
import './MoviesCardList.css';

function MoviesCardList({ moviesCards, isSaved, onDeleteMoviesCard, onToggleSaveMovieCard }) {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {moviesCards.map((item) => (
          <MoviesCard
            key={item._id}
            movieCard={item}
            isSaved={isSaved}
            onDeleteMoviesCard={onDeleteMoviesCard}
            onToggleSaveMovieCard={onToggleSaveMovieCard}
          />
        ))}
      </div>
      <button className='movies-card-list__button-more'>{moviesCardListText.buttonMoreText}</button>
    </section>
  );
}

export default MoviesCardList;