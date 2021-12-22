import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { areas, profileText } from '../../utils/constants';
import './Profile.css';

function Profile({ onSignOut, onUpdateUserInfo }) {

  const user = React.useContext(CurrentUserContext);

  const emailRef = React.useRef();
  const nameRef = React.useRef();
  const buttonRef = React.useRef();

  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [nameErrorText, setNameErrorText] = React.useState('');

  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isValidName, setIsValidName] = React.useState(true);

  const [isUserInfoSame, setisUserInfoSame] = React.useState(true);

  function checkIsUserInfoSame() {
    const nameDiffer = user.currentUser.name === nameRef.current.value;
    const emailDiffer = user.currentUser.email === emailRef.current.value;
    setisUserInfoSame(nameDiffer && emailDiffer);
  }

  function checkValidEmail() {
    if (!emailRef.current.validity.valid) {
      setEmailErrorText(emailRef.current.validationMessage);
      setIsValidEmail(false);
    }
    else {
      setIsValidEmail(true);
      setEmailErrorText('');
    }
    checkIsUserInfoSame();
  }

  function checkValidName() {
    if (!nameRef.current.validity.valid) {
      setNameErrorText(nameRef.current.validationMessage);
      setIsValidName(false);
    }
    else {
      setIsValidName(true);
      setNameErrorText('');
    }
    checkIsUserInfoSame();
  }

  function setFormAttributeDisabled(value) {
    nameRef.current.disabled = value
    emailRef.current.disabled = value;
    buttonRef.current.disabled = value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormAttributeDisabled(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const _id = user.currentUser._id;
    onUpdateUserInfo({ _id, email, name }, setisUserInfoSame, setFormAttributeDisabled);
  }

  function handleSignOut() {
    onSignOut();
  }

  return (
    <>
      <Header area={areas.areaProfile} />
      <section className='profile__section'>
        <h2 className='profile__title'>{profileText.title} {user.currentUser.name}</h2>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='profile__fieldset'>
            <input
              className='profile__input'
              defaultValue={user.currentUser.name}
              type='text'
              minLength='2'
              maxLength='30'
              required
              ref={nameRef}
              onChange={checkValidName}
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.name}</span>
            <input
              className='profile__input'
              defaultValue={user.currentUser.email}
              type='email'
              required
              ref={emailRef}
              onChange={checkValidEmail}
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.email}</span>
          </fieldset>
          <span className='profile__error'>{nameErrorText}</span>
          <span className='profile__error profile__error_type_second'>{emailErrorText}</span>
          <button
            className={`profile__edit-button ${!(isValidEmail && isValidName) || isUserInfoSame ? 'profile__edit-button_disabled' : ''}`}
            type='submit'
            disabled={!(isValidEmail && isValidName) || isUserInfoSame}
            ref={buttonRef}
          >{profileText.editButtonText} </button>
        </form>
        <button
          className='profile__logout'
          type='button'
          onClick={handleSignOut}
        >{profileText.logoutButtonText}</button>
      </section>
    </>
  );
}

export default Profile;