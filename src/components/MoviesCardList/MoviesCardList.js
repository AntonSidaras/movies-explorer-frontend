import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesCardListText } from "../../utils/constants";
import './MoviesCardList.css';

function MoviesCardList({ moviesCards, isSaved }) {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {moviesCards.map((item) => (
          <MoviesCard
            key={item.id}
            movieCard={item}
            isSaved={isSaved}
          />
        ))}
      </div>
      <button
        className={`movies-card-list__button-more ${isSaved ? 'movies-card-list__button-more_hidden' : ''}`}>
        {moviesCardListText.buttonMoreText}
      </button>
    </section>
  );
}

export default MoviesCardList;