import React from "react";
import './SaveCheckbox.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SaveCheckbox({ movieCard, onToggleSaveMovieCard }) {

  const user = React.useContext(CurrentUserContext);
  const [checked, setChecked] = React.useState(movieCard.owner._id === user._id);

  console.log(checked);

  function handleToggleSave() {
    onToggleSaveMovieCard(movieCard);
    checked ? setChecked(false) : setChecked(true);
  }

  return (
    <div className='save-checkbox__container'>
      <input
        className='save-checkbox__checkbox'
        type='checkbox'
        id={`${movieCard._id}save`}
        onChange={handleToggleSave}
        checked={checked}
      />
      <label className='save-checkbox__label' htmlFor={`${movieCard._id}save`} />
    </div>
  );
}

export default SaveCheckbox;