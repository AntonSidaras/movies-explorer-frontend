import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import { appRoutes, areas, loginText } from '../../utils/constants';
import onFailureAuth from '../../images/infotooltip/fail.svg';
import './Login.css';

function Login({ onSignIn, onDisplayInfoTooltip }) {

  const navigate = useNavigate();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [isValidCredentials, setIsValidCredentials] = React.useState(false);
  const [errorText, setErrorText] = React.useState([]);

  function checkValidCredentials() {

    let errorTextLocal = [];
    setErrorText(errorTextLocal);
    setIsValidCredentials(true);

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

    if (isValidCredentials) {
      onSignIn({
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
      navigate(appRoutes.content.movies);
    }
    else {
      onDisplayInfoTooltip({ title: 'Ошибка', texts: errorText, image: onFailureAuth });
    }
  }

  return (
    <>
      <Header area={areas.areaAuth} />
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
              ref={emailRef}
            />
            <label htmlFor='passwordLogin' className='login__caption'>{loginText.captions.password}</label>
            <input
              id='passwordLogin'
              className='login__input'
              type='text'
              required
              ref={passwordRef}
            />
          </fieldset>
          <button
            className='login__sign-in-button'
            type='submit'
            onClick={checkValidCredentials}
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