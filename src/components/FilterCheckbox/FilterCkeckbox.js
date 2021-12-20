import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ onFilter, filterState }) {

  const checkboxRef = React.useRef();
  const [isChecked, setIsChecked] = React.useState(filterState);

  const toggleCheckboxState = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    handleFilter();
  }

  const handleFilter = () => {
    onFilter(checkboxRef.current.checked);
  }

  return (
    <div className='filter-checkbox__container'>
      <input
        className='filter-checkbox__checkbox'
        type='checkbox'
        id='shortMeter'
        checked={isChecked}
        onChange={toggleCheckboxState}
        ref={checkboxRef}
      />
      <label className='filter-checkbox__label' htmlFor='shortMeter' />
    </div>
  );
}

export default FilterCheckbox;