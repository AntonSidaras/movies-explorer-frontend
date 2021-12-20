import React from "react";
import './SaveCheckbox.css';

function SaveCheckbox({ movieCard }) {

  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckboxState = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  return (
    <div className='save-checkbox__container'>
      <input
        className='save-checkbox__checkbox'
        type='checkbox'
        id={`${movieCard.id}save`}
        defaultChecked={isChecked}
        onChange={toggleCheckboxState}
      />
      <label className='save-checkbox__label' htmlFor={`${movieCard.id}save`} />
    </div>
  );
}

export default SaveCheckbox;