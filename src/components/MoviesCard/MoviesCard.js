import React from "react";
import './MoviesCard.css';

function MoviesCard({ data }) {

  return (
    <div className='movies-card' id={data.id}>
      <div>
        <img src={data.url} alt='img' />
        <div>
          <h2>33 слова</h2>
          <input type='checkbox' />
        </div>
        <span>time</span>
      </div>
    </div>
  );
}

export default MoviesCard;