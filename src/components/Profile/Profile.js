import React from 'react';
import { useNavigate } from 'react-router';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { appRoutes, areas, profileText } from '../../utils/constants';
import onFailureEdit from '../../images/infotooltip/fail.svg';
import onSuccessEdit from '../../images/infotooltip/ok.svg';
import './Profile.css';

function Profile({ onSignOut, onDisplayInfoTooltip }) {

  const navigate = useNavigate();
  const user = React.useContext(CurrentUserContext);
  const [isValidUserData, setIsValidUserData] = React.useState(false);
  const [errorText, setErrorText] = React.useState([]);

  const nameRef = React.useRef();
  const emailRef = React.useRef();

  function checkValidUserData() {

    let errorTextLocal = [];
    setErrorText(errorTextLocal);

    setIsValidUserData(true);

    if (!nameRef.current.validity.valid) {
      errorTextLocal.push(`Имя: ${nameRef.current.validationMessage}`);
      setIsValidUserData(false);
    }

    if (!emailRef.current.validity.valid) {
      errorTextLocal.push(`E-mail: ${emailRef.current.validationMessage}`);
      setIsValidUserData(false);
    }

    setErrorText(errorTextLocal);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidUserData) {
      onDisplayInfoTooltip({ title: 'Ошибка', texts: errorText, image: onFailureEdit });
    }
    else {
      onDisplayInfoTooltip({ title: 'Данные успешно изменены', texts: [], image: onSuccessEdit });
    }
  }

  function handleSignOut() {
    onSignOut();
    navigate(appRoutes.root);
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
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.name}</span>
            <input
              className='profile__input'
              defaultValue={user.currentUser.email}
              type='email'
              required
              ref={emailRef}
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.email}</span>
          </fieldset>
          <button
            className='profile__edit-button'
            type='submit'
            onClick={checkValidUserData}
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