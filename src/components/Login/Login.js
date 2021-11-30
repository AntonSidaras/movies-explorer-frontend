import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import { appRoutes, areas, loginText } from '../../utils/constants';
import './Login.css';

function Login() {

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(appRoutes.content.movies);
  }

  return (
    <>
      <Header area={areas.areaAuth} isLoggedIn={false} />
      <section className='login__section'>
        <h2 className='login__title'>{loginText.title}</h2>
        <form className='login__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='login__fieldset'>
            <label htmlFor='emailLogin' className='login__caption'>{loginText.captions.email}</label>
            <input
              id='emailLogin'
              className='login__input'
              type='email'
              required
            />
            <label htmlFor='passwordLogin' className='login__caption'>{loginText.captions.password}</label>
            <input
              id='passwordLogin'
              className={`login__input ${true ? 'login__input_color_red' : ''}`}
              type='password'
              required
            />
          </fieldset>
          <span
            className={`login__error ${true ? 'login__error_visible' : ''}`}
          >{loginText.errorText}</span>
          <button
            className='login__sign-in-button'
            type='submit'
          >{loginText.buttonText}</button>
        </form>
        <div className='login__bottom'>
          <span className='login__text'>{loginText.text}</span>
          <Link className='login__sign-up-link' to={appRoutes.auth.signUp}>{loginText.singUpText}</Link>
        </div>
      </section>
    </>
  );
}

export default Login;