import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { appRoutes, areas, registerText } from '../../utils/constants';
import './Register.css';

function Register({ onSignUp }) {

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const buttonRef = React.useRef();

  const [nameErrorText, setNameErrorText] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [passwordErrorText, setPasswordErrorText] = React.useState('');

  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);

  const [isSignUpError, setIsSignUpError] = React.useState(false);

  function checkValidName() {
    if (!nameRef.current.validity.valid) {
      setNameErrorText(nameRef.current.validationMessage);
      setIsValidName(false);
    }
    else {
      setIsValidName(true);;
      setNameErrorText('');
    }
  }

  function checkValidEmail() {
    if (!emailRef.current.validity.valid) {
      setEmailErrorText(emailRef.current.validationMessage);
      setIsValidEmail(false);;
    }
    else {
      setIsValidEmail(true);;
      setEmailErrorText('');
    }
  }

  function checkValidPassword() {
    if (!passwordRef.current.validity.valid) {
      setPasswordErrorText(passwordRef.current.validationMessage);
      setIsValidPassword(false);
    }
    else {
      setIsValidPassword(true);;
      setPasswordErrorText('');
    }
  }

  function setFormAttributeDisabled(value) {
    nameRef.current.disabled = value
    emailRef.current.disabled = value;
    passwordRef.current.disabled = value;
    buttonRef.current.disabled = value;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormAttributeDisabled(true);

    onSignUp({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }, setFormAttributeDisabled);

    if (isValidName && isValidEmail && isValidPassword) {
      setIsSignUpError(false);
    }
    else {
      setIsSignUpError(true);
    }
  }

  return (
    <section className={'register'}>
      <Header area={areas.areaAuth} />
      <div className='register__section'>
        <h2 className='register__title'>{registerText.title}</h2>
        <form className='register__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='register__fieldset'>
            <label
              htmlFor='nameRegister'
              className='register__caption'
            >{registerText.captions.name}</label>
            <input
              id='nameRegister'
              className='register__input'
              type='text'
              disabled={false}
              minLength='2'
              maxLength='30'
              required
              ref={nameRef}
              onChange={checkValidName}
            />
            <span className='register__error'>{nameErrorText}</span>
            <label
              htmlFor='emailRegister'
              className='register__caption'
            >{registerText.captions.email}</label>
            <input
              id='emailRegister'
              className='register__input'
              type='email'
              disabled={false}
              required
              ref={emailRef}
              onChange={checkValidEmail}
            />
            <span className='register__error'>{emailErrorText}</span>
            <label
              htmlFor='passwordRegister'
              className='register__caption'
            >{registerText.captions.password}</label>
            <input
              id='passwordRegister'
              className={`register__input ${isSignUpError ? 'register__input_color_red' : ''}`}
              type='password'
              disabled={false}
              required
              ref={passwordRef}
              onChange={checkValidPassword}
            />
            <span className='register__error'>{passwordErrorText}</span>
          </fieldset>
          <span
            className={`register__error register__error_type_last ${isSignUpError ? 'register__error_type_visible' : ''}`}
          >{registerText.errorText}</span>
          <button
            className={`register__sign-up-button ${!(isValidName && isValidEmail && isValidPassword) ? 'register__sign-up-button_type_disabled' : ''}`}
            type='submit'
            disabled={!(isValidName && isValidEmail && isValidPassword)}
            ref={buttonRef}
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