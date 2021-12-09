import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import { appRoutes, areas, registerText } from '../../utils/constants';
import onSuccessAuth from '../../images/infotooltip/ok.svg';
import './Register.css';

function Register({ onDisplayInfoTooltip }) {

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    onDisplayInfoTooltip({ title: 'Вы успешно зарегистрировались!', texts: [], image: onSuccessAuth });
    navigate(appRoutes.content.movies);
  }

  return (
    <section className={'register'}>
      <Header area={areas.areaAuth} isLoggedIn={false} />
      <div className='register__section'>
        <h2 className='register__title'>{registerText.title}</h2>
        <form className='register__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='register__fieldset'>
            <label htmlFor='nameRegister' className='register__caption'>{registerText.captions.name}</label>
            <input
              id='nameRegister'
              className='register__input'
              type='text'
              minLength='2'
              maxLength='30'
              required
            />
            <label htmlFor='emailRegister' className='register__caption'>{registerText.captions.email}</label>
            <input
              id='emailRegister'
              className='register__input'
              type='email'
              required
            />
            <label htmlFor='passwordRegister' className='register__caption'>{registerText.captions.password}</label>
            <input
              id='passwordRegister'
              className={`register__input ${true ? 'register__input_color_red' : ''}`}
              type='password'
              required
            />
          </fieldset>
          <span
            className={`register__error ${true ? 'register__error_visible' : ''}`}
          >{registerText.errorText}</span>
          <button
            className='register__sign-up-button'
            type='submit'
          >{registerText.buttonText}</button>
        </form>
        <div className='register__bottom'>
          <span className='register__text'>{registerText.text}</span>
          <Link className='register__sign-in-link' to={appRoutes.auth.signIn}>{registerText.singInText}</Link>
        </div>
      </div>
    </section>
  );
}

export default Register;