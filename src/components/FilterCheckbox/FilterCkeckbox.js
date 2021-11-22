import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
    <div className='filter-checkbox__container'>
      <input className='filter-checkbox__checkbox' type='checkbox' id='shortMeter' onChange={() => { console.log('switch') }} />
      <label className='filter-checkbox__label' htmlFor='shortMeter' />
    </div>
  );
}

export default FilterCheckbox;