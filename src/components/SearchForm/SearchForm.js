import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCkeckbox";
import './SearchForm.css';

function SearchForm() {

  return (
    <section className='search-form__section'>
      <form className='search-form__form' noValidate>
        <div className='search-form__container'>
          <input className='search-form__input' />
          <button className='search-form__button' />
        </div>
        <div className='search-form__filter'>
          <span>Короткометражки</span>
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;