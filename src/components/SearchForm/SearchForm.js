import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCkeckbox";
import './SearchForm.css';

function SearchForm() {

  return (
    <section className='search-form'>
      <form className='search-form__form' noValidate>
        <div className='search-form__container'>
          <input className='search-form__input' placeholder='Фильм' />
          <button className='search-form__button' />
        </div>
        <div className='search-form__filter'>
          <FilterCheckbox />
          <span className='search-form__span'>Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;