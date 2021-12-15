import React from 'react';
import { useNavigate } from 'react-router';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { appRoutes, areas, profileText } from '../../utils/constants';
import onSuccessEdit from '../../images/infotooltip/ok.svg';
import './Profile.css';

function Profile({ onSignOut, onDisplayInfoTooltip }) {

  const navigate = useNavigate();
  const user = React.useContext(CurrentUserContext);

  const emailRef = React.useRef();
  const nameRef = React.useRef();

  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [nameErrorText, setNameErrorText] = React.useState('');

  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isValidName, setIsValidName] = React.useState(true);

  //const [isUpdateUserDataError, setUpdateUserDataError] = React.useState(false);

  function checkValidEmail() {
    if (!emailRef.current.validity.valid) {
      setEmailErrorText(emailRef.current.validationMessage);
      setIsValidEmail(false);
    }
    else {
      setIsValidEmail(true);
      setEmailErrorText('');
    }
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
  }

  function checkUserDataIsDiffer() {
    const nameDiffer = user.currentUser.name === nameRef.current.value;
    const emailDiffer = user.currentUser.email === emailRef.current.value;
    return nameDiffer && emailDiffer;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onDisplayInfoTooltip({ title: 'Данные успешно изменены', texts: [], image: onSuccessEdit });
  }

  function handleSignOut() {
    onSignOut();
    navigate(appRoutes.root);
  }

  return (
    <>
      <Header area={areas.areaProfile} isLoggedIn={true} />
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
              ref={emailRef}
              onChange={checkValidEmail}
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.name}</span>
            <input
              className='profile__input'
              defaultValue={user.currentUser.email}
              type='email'
              required
              ref={nameRef}
              onChange={checkValidName}
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.email}</span>
          </fieldset>
          <span className='profile__error'>{emailErrorText}</span>
          <span className='profile__error profile__error_type_second'>{nameErrorText}</span>
          <button
            className={`profile__edit-button ${!(isValidEmail && isValidName) ? 'profile__edit-button_disabled' : ''}`}
            type='submit'
            disabled={!(isValidEmail && isValidName) || checkUserDataIsDiffer}
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