import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCkeckbox";
import { searchFormText } from "../../utils/constants";
import './SearchForm.css';

function SearchForm({ onSearch, onFilter }) {

  const inputRef = React.useRef();

  const [inputErrorText, setInputErrorText] = React.useState('');
  const [isValidInput, setIsValidInput] = React.useState(false);

  function checkValidInput() {
    if (!inputRef.current.validity.valid) {
      setInputErrorText(inputRef.current.validationMessage);
      setIsValidInput(false);
    }
    else {
      setIsValidInput(true);
      setInputErrorText('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidInput) {
      onSearch(inputRef.current.value);
    }
    else {
      console.log(inputErrorText);
    }
  }

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit} noValidate>
        <div className='search-form__container'>
          <input
            className='search-form__input'
            placeholder={searchFormText.placeholder}
            type='text'
            required
            ref={inputRef}
            onChange={checkValidInput}
          />
          <button
            className='search-form__button'
            type='submit'
            onClick={checkValidInput}
          />
        </div>
        <div className='search-form__filter'>
          <FilterCheckbox onFilter={onFilter} />
          <span className='search-form__span'>{searchFormText.checkbox}</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;