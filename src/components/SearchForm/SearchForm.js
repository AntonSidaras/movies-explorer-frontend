import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCkeckbox";
import { searchFormText } from "../../utils/constants";
import './SearchForm.css';

function SearchForm() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit} noValidate>
        <div className='search-form__container'>
          <input
            className='search-form__input'
            placeholder={searchFormText.placeholder}
          />
          <button
            className='search-form__button'
            type='submit'
          />
        </div>
        <div className='search-form__filter'>
          <FilterCheckbox />
          <span className='search-form__span'>{searchFormText.checkbox}</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;