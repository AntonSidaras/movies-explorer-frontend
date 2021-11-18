import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { areas } from '../../utils/constants';
import './Login.css';

function Login() {

  return (
    <>
      <Header area={areas.areaAuth} />
      <section className='login__section'>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' noValidate>
          <fieldset className='login__fieldset'>
            <input className='login__input' />
            <input className='login__input' />
          </fieldset>
          <span className='login__error'>Что-то пошло не так...</span>
          <button className='login__sign-in-button'></button>
        </form>
        <div className='login__bottom'>
          <span className='login__text'>Ещё не зарегистрированы?</span>
          <Link className='login__sign-up-link' to='/signup'>Регистрация</Link>
        </div>
      </section>
    </>
  );
}

export default Login;