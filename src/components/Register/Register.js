import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { appRoutes, areas, registerText } from '../../utils/constants';
import './Register.css';

import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  return (
    <>
      <Header area={areas.areaAuth} />
      <section className='register__section'>
        <h2 className='register__title'>{registerText.title}</h2>
        <form className='register__form' noValidate>
          <fieldset className='register__fieldset'>
            <label htmlFor='nameRegister' className='register__caption'>{registerText.captions.name}</label>
            <input id='nameRegister' className='register__input' />
            <label htmlFor='emailRegister' className='register__caption'>{registerText.captions.email}</label>
            <input id='emailRegister' className='register__input' />
            <label htmlFor='passwordRegister' className='register__caption'>{registerText.captions.password}</label>
            <input id='passwordRegister' className='register__input' />
          </fieldset>
          <span className='register__error'>{registerText.errorText}</span>
          <button className='register__sign-up-button' onClick={() => { navigate(appRoutes.content.movies) }}>{registerText.buttonText}</button>
        </form>
        <div className='register__bottom'>
          <span className='register__text'>{registerText.text}</span>
          <Link className='register__sign-in-link' to={appRoutes.auth.signIn}>{registerText.singInText}</Link>
        </div>
      </section>
    </>
  );
}

export default Register;