import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import { appRoutes, areas, registerText } from '../../utils/constants';
import onSuccessAuth from '../../images/infotooltip/ok.svg';
import onFailureAuth from '../../images/infotooltip/fail.svg';
import './Register.css';

function Register({ onSignUp, onDisplayInfoTooltip }) {

  const navigate = useNavigate();

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [nameErrorText, setNameErrorText] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [passwordErrorText, setPasswordErrorText] = React.useState('');

  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);

  const [isSignUpError, setIsSignUpError] = React.useState(false);
  const [isValidCredentials, setIsValidCredentials] = React.useState(false);

  function checkValidName() {
    if (!nameRef.current.validity.valid) {
      setNameErrorText(nameRef.current.validationMessage);
      setIsValidName(false);
      setIsValidCredentials(false);
    }
    else {
      setIsValidName(true);
      setIsValidCredentials(isValidName && isValidEmail && isValidPassword);
      setNameErrorText('');
    }
  }

  function checkValidEmail() {
    if (!emailRef.current.validity.valid) {
      setEmailErrorText(emailRef.current.validationMessage);
      setIsValidEmail(false);
      setIsValidCredentials(false);
    }
    else {
      setIsValidEmail(true);
      setIsValidCredentials(isValidName && isValidEmail && isValidPassword);
      setEmailErrorText('');
    }
  }

  function checkValidPassword() {
    if (!passwordRef.current.validity.valid) {
      setPasswordErrorText(passwordRef.current.validationMessage);
      setIsValidPassword(false);
      setIsValidCredentials(false);
    }
    else {
      setIsValidPassword(true);
      setIsValidCredentials(isValidName && isValidEmail && isValidPassword);
      setPasswordErrorText('');
    }
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
      navigate(appRoutes.content.movies);
    }
    else {
      onDisplayInfoTooltip({ title: 'Ошибка', texts: [], image: onFailureAuth });
      setIsSignUpError(true);
    }
  }

  return (
    <section className={'register'}>
      <Header area={areas.areaAuth} isLoggedIn={false} />
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
            className={`register__sign-up-button ${!isValidCredentials ? 'register__sign-up-button_type_disabled' : ''}`}
            type='submit'
            disabled={!isValidCredentials}
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