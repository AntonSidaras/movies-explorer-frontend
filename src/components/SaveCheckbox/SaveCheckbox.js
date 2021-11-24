import React from "react";
import './SaveCheckbox.css';

function SaveCheckbox({ id }) {

  return (
    <div className='save-checkbox__container'>
      <input className='save-checkbox__checkbox' type='checkbox' id={`${id}save`} onChange={() => { console.log(id) }} />
      <label className='save-checkbox__label' htmlFor={`${id}save`} />
    </div>
  );
}

export default SaveCheckbox;