import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { appRoutes, areas, registerText } from '../../utils/constants';
import onFailureAuth from '../../images/infotooltip/fail.svg';
import onSuccessAuth from '../../images/infotooltip/ok.svg';
import './Register.css';

function Register({ onSignUp, onDisplayInfoTooltip }) {

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [isSignUpError, setIsSignUpError] = React.useState(false);
  const [isValidCredentials, setIsValidCredentials] = React.useState(false);
  const [errorText, setErrorText] = React.useState([]);

  function checkValidCredentials() {

    let errorTextLocal = [];
    setErrorText(errorTextLocal);
    setIsSignUpError(false);
    setIsValidCredentials(true);

    if (!nameRef.current.validity.valid) {
      errorTextLocal.push(`Имя: ${nameRef.current.validationMessage}`);
      setIsValidCredentials(false);
    }

    if (!emailRef.current.validity.valid) {
      errorTextLocal.push(`E-mail: ${emailRef.current.validationMessage}`);
      setIsValidCredentials(false);
    }
    if (!passwordRef.current.validity.valid) {
      errorTextLocal.push(`Пароль: ${passwordRef.current.validationMessage}`);
      setIsValidCredentials(false);
    }

    setErrorText(errorTextLocal);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSignUp({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    if (isValidCredentials) {
      onDisplayInfoTooltip({ title: 'Вы успешно зарегистрировались!', texts: [], image: onSuccessAuth });
      setIsSignUpError(false);
    }
    else {
      onDisplayInfoTooltip({ title: 'Ошибка', texts: errorText, image: onFailureAuth });
      setIsSignUpError(true);
    }
  }

  return (
    <>
      <Header area={areas.areaAuth} />
      <section className='register__section'>
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
              ref={nameRef}
              onChange={checkValidCredentials}
            />
            <label htmlFor='emailRegister' className='register__caption'>{registerText.captions.email}</label>
            <input
              id='emailRegister'
              className='register__input'
              type='email'
              required
              ref={emailRef}
              onChange={checkValidCredentials}
            />
            <label htmlFor='passwordRegister' className='register__caption'>{registerText.captions.password}</label>
            <input
              id='passwordRegister'
              className={`register__input ${isSignUpError ? 'register__input_color_red' : ''}`}
              type='password'
              required
              ref={passwordRef}
              onChange={checkValidCredentials}
            />
          </fieldset>
          <span
            className={`register__error ${isSignUpError ? 'register__error_visible' : ''}`}
          >{registerText.errorText}</span>
          <button
            className='register__sign-up-button'
            type='submit'
            onClick={checkValidCredentials}
          >{registerText.buttonText}</button>
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