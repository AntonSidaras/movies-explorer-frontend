import React from "react";
import { moviesServerRoot } from "../../utils/constants";
import './SaveCheckbox.css';

function SaveCheckbox({ movieCard, onToggleSave }) {

  const checkboxRef = React.useRef();
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckboxState = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    handleSave();
  }

  const handleSave = () => {

    const movieId = movieCard.movieId;
    const nameRU = movieCard.nameRU;
    const nameEN = movieCard.nameEN;
    const director = movieCard.director;
    const country = movieCard.country;
    const year = movieCard.year;
    const duration = movieCard.duration;
    const description = movieCard.description;
    const trailer = movieCard.trailerLink;
    const image = `${moviesServerRoot}${movieCard.image.url}`;
    const thumbnail = image;

    onToggleSave(checkboxRef.current.checked, {
      movieId,
      nameRU,
      nameEN,
      director,
      country,
      year,
      duration,
      description,
      trailer,
      image,
      thumbnail
    });
  }

  return (
    <div className='save-checkbox__container'>
      <input
        className='save-checkbox__checkbox'
        type='checkbox'
        id={`${movieCard.id}save`}
        defaultChecked={isChecked}
        onChange={toggleCheckboxState}
        ref={checkboxRef}
      />
      <label className='save-checkbox__label' htmlFor={`${movieCard.id}save`} />
    </div>
  );
}

export default SaveCheckbox;