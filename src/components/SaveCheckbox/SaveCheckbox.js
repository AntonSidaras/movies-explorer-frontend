import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SaveCheckbox.css';

function SaveCheckbox({ movieCard, savedMovies, onToggleSave }) {

  const user = React.useContext(CurrentUserContext);

  savedMovies.forEach(item => {
    if (item.owner._id === user.currentUser._id && item.movieId === movieCard.movieId) {
      console.log(item.owner._id, user.currentUser._id, item.movieId, movieCard.movieId);
    }
  });

  const checkboxRef = React.useRef();
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckboxState = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    handleSave();
  }

  const handleSave = () => {
    onToggleSave(checkboxRef.current.checked, movieCard);
  }

  return (
    <div className='save-checkbox__container'>
      <input
        className='save-checkbox__checkbox'
        type='checkbox'
        id={`${movieCard.movieId}save`}
        checked={isChecked}
        onChange={toggleCheckboxState}
        ref={checkboxRef}
      />
      <label className='save-checkbox__label' htmlFor={`${movieCard.movieId}save`} />
    </div>
  );
}

export default SaveCheckbox;