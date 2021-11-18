import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { areas } from '../../utils/constants';
import './Register.css';

function Register() {

  return (
    <>
      <Header area={areas.areaAuth} />
      <section className='register__section'>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' noValidate>
          <fieldset className='register__fieldset'>
            <input className='register__input' />
            <input className='register__input' />
            <input className='register__input' />
          </fieldset>
          <span className='register__error'>Что-то пошло не так...</span>
          <button className='register__sign-up-button'></button>
        </form>
        <div className='register__bottom'>
          <span className='register__text'>Уже зарегистрированы?</span>
          <Link className='register__sign-in-link' to='/signin'>Войти</Link>
        </div>
      </section>
    </>
  );
}

export default Register;