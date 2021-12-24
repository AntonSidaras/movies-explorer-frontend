import React from "react";
import './SaveCheckbox.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function SaveCheckbox({ movieCard, onToggleSave }) {

  const user = React.useContext(CurrentUserContext);

  const checkboxRef = React.useRef();
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    setIsChecked(user.savedMovies.some(movie => movie.owner._id === user.currentUser._id && movie.movieId === movieCard.movieId));
  }, [user, movieCard.movieId]);

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