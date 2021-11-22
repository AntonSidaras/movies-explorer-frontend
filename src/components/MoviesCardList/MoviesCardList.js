import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {

  const cards = [{ id: '0' }, { id: '1' }];

  return (
    <section>
      {cards.map((item) => (
        <MoviesCard key={item.id} />
      ))}
    </section>
  );
}

export default MoviesCardList;