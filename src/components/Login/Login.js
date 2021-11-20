import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { areas, loginText } from '../../utils/constants';
import './Login.css';

import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  return (
    <>
      <Header area={areas.areaAuth} />
      <section className='login__section'>
        <h2 className='login__title'>{loginText.title}</h2>
        <form className='login__form' noValidate>
          <fieldset className='login__fieldset'>
            <label htmlFor='emailLogin' className='login__caption'>{loginText.captions.email}</label>
            <input id='emailLogin' className='login__input' />
            <label htmlFor='passwordLogin' className='login__caption'>{loginText.captions.password}</label>
            <input id='passwordLogin' className='login__input' />
          </fieldset>
          <span className='login__error'>{loginText.errorText}</span>
          <button className='login__sign-in-button' onClick={() => { navigate('/movies') }}>{loginText.buttonText}</button>
        </form>
        <div className='login__bottom'>
          <span className='login__text'>{loginText.text}</span>
          <Link className='login__sign-up-link' to='/signup'>{loginText.singUpText}</Link>
        </div>
      </section>
    </>
  );
}

export default Login;