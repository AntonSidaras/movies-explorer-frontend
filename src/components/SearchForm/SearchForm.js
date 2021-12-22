import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCkeckbox";
import { searchFormText } from "../../utils/constants";
import './SearchForm.css';

function SearchForm({ onSearch, onFilter, filterState }) {

  const inputRef = React.useRef();

  const [inputErrorText, setInputErrorText] = React.useState('');
  const [isValidInput, setIsValidInput] = React.useState(false);
  const [isNotFoundVisible, setIsNotFoundVisible] = React.useState(false);

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

  function notFound() {
    setIsNotFoundVisible(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidInput) {
      setIsNotFoundVisible(false);
      onSearch(inputRef.current.value, notFound);
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
          <span className={`search-form__not-found ${isNotFoundVisible ? 'search-form__not-found_visible' : ''}`}>Ничего не найдено</span>
          <button
            className='search-form__button'
            type='submit'
            onClick={checkValidInput}
          />
        </div>
        <div className='search-form__filter'>
          <FilterCheckbox onFilter={onFilter} filterState={filterState} />
          <span className='search-form__span'>{searchFormText.checkbox}</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;