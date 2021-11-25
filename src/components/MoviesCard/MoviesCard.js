import React from "react";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import { areas } from "../../utils/constants";
import './MoviesCard.css';

function MoviesCard({ data, area }) {

  const isAreaMovies = area === areas.areaMovies;
  const action = isAreaMovies ? <SaveCheckbox id={data.id} /> : <button className='movies-card__remove' />;

  console.log(area);

  return (
    <div className='movies-card' id={data.id}>
      <div className='movies-card__col'>
        <img className='movies-card__img' src={data.url} alt='img' />
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