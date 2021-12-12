import React from "react";
import './SaveCheckbox.css';

function SaveCheckbox({ movieCard }) {

  return (
    <div className='save-checkbox__container'>
      <input
        className='save-checkbox__checkbox'
        type='checkbox'
        id={`${movieCard._id}save`}
      />
      <label className='save-checkbox__label' htmlFor={`${movieCard._id}save`} />
    </div>
  );
}

export default SaveCheckbox;