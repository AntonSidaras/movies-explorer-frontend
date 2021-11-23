import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/cards";
import './MoviesCardList.css';

function MoviesCardList() {

  return (
    <section className='movies-card-list'>
      {cards.map((item) => (
        <MoviesCard key={item.id} data={item} />
      ))}
    </section>
  );
}

export default MoviesCardList;