import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/cards";
import { moviesCardListText } from "../../utils/constants";
import './MoviesCardList.css';

function MoviesCardList({ area }) {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {cards.map((item) => (
          <MoviesCard key={item.id} data={item} area={area} />
        ))}
      </div>
      <button className='movies-card-list__button-more'>{moviesCardListText.buttonMoreText}</button>
    </section>
  );
}

export default MoviesCardList;