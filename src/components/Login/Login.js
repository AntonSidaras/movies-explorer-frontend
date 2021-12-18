import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { appRoutes, areas, loginText } from '../../utils/constants';
import './Login.css';

function Login({ onSignIn }) {

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [passwordErrorText, setPasswordErrorText] = React.useState('');

  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);

  const [isSignInError, setIsSignInError] = React.useState(false);
  const [isValidCredentials, setIsValidCredentials] = React.useState(false);

  function checkValidEmail() {
    if (!emailRef.current.validity.valid) {
      setEmailErrorText(emailRef.current.validationMessage);
      setIsValidEmail(false);
      setIsValidCredentials(false);
    }
    else {
      setIsValidEmail(true);
      setIsValidCredentials(isValidEmail && isValidPassword);
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
      setIsValidCredentials(isValidEmail && isValidPassword);
      setPasswordErrorText('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSignIn({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    if (isValidCredentials) {
      setIsSignInError(false);
      //navigate(appRoutes.content.movies);
    }
    else {
      setIsSignInError(true);
    }
  }

  return (
    <section className='login'>
      <Header area={areas.areaAuth} isLoggedIn={false} />
      <div className='login__section'>
        <h2 className='login__title'>{loginText.title}</h2>
        <form className='login__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='login__fieldset'>
            <label
              htmlFor='emailLogin'
              className='login__caption'
            >{loginText.captions.email}</label>
            <input
              id='emailLogin'
              className='login__input'
              type='email'
              required
              ref={emailRef}
              onChange={checkValidEmail}
            />
            <span className='login__error'>{emailErrorText}</span>
            <label
              htmlFor='passwordLogin'
              className='login__caption'
            >{loginText.captions.password}</label>
            <input
              id='passwordLogin'
              className={`login__input ${isSignInError ? 'login__input_color_red' : ''}`}
              type='password'
              required
              ref={passwordRef}
              onChange={checkValidPassword}
            />
            <span className='login__error'>{passwordErrorText}</span>
          </fieldset>
          <span
            className={`login__error login__error_type_last ${isSignInError ? 'login__error_type_visible' : ''}`}
          >{loginText.errorText}</span>
          <button
            className={`login__sign-in-button ${!isValidCredentials ? 'login__sign-in-button_type_disabled' : ''}`}
            type='submit'
            disabled={!isValidCredentials}
          >{loginText.buttonText}</button>
        </form>
        <div className='login__bottom'>
          <span className='login__text'>{loginText.text}</span>
          <Link className='login__sign-up-link' to={appRoutes.auth.signUp}>{loginText.singUpText}</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;