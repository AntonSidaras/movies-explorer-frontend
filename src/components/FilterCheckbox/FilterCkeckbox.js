import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [isChecked, setIsChecked] = React.useState(true);

  const toggleCheckboxState = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  return (
    <div className='filter-checkbox__container'>
      <input
        className='filter-checkbox__checkbox'
        type='checkbox'
        id='shortMeter'
        defaultChecked={isChecked}
        onChange={toggleCheckboxState}
      />
      <label className='filter-checkbox__label' htmlFor='shortMeter' />
    </div>
  );
}

export default FilterCheckbox;