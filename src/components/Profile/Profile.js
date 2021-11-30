import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import { appRoutes, areas, profileText } from '../../utils/constants';
import onSuccessEdit from '../../images/infotooltip/ok.svg';
import { appInitValues } from '../../utils/constants';
import './Profile.css';

function Profile({ onDisplayInfoTooltip }) {

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    onDisplayInfoTooltip({ title: 'Данные успешно изменены', texts: [], image: onSuccessEdit });
  }

  function handleSignOut() {
    navigate(appRoutes.root);
  }

  return (
    <>
      <Header area={areas.areaProfile} isLoggedIn={true} />
      <section className='profile__section'>
        <h2 className='profile__title'>{profileText.title} {appInitValues.user.name}</h2>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='profile__fieldset'>
            <input
              className='profile__input'
              defaultValue={appInitValues.user.name}
              type='text'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.name}</span>
            <input
              className='profile__input'
              defaultValue={appInitValues.user.email}
              type='email'
              required
            />
            <span className='profile__special-placeholder'>{profileText.placeholders.email}</span>
          </fieldset>
          <button
            className='profile__edit-button'
            type='submit'
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