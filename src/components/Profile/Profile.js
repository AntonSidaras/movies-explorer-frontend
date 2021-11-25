import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { appRoutes, areas, profileText } from '../../utils/constants';
import './Profile.css';

function Profile() {

  const user = React.useContext(CurrentUserContext);

  return (
    <>
      <Header area={areas.areaProfile} />
      <section className='profile__section'>
        <h2 className='profile__title'>{profileText.title} {user.currentUser.name}</h2>
        <form className='profile__form' noValidate>
          <fieldset className='profile__fieldset'>
            <input className='profile__input' value={user.currentUser.name} readOnly />
            <span className='profile__special-placeholder'>{profileText.placeholders.name}</span>
            <input className='profile__input' value={user.currentUser.email} readOnly />
            <span className='profile__special-placeholder'>{profileText.placeholders.email}</span>
          </fieldset>
          <button className='profile__edit-button'>{profileText.editButtonText} </button>
        </form>
        <Link className='profile__logout' to={appRoutes.root}>{profileText.logoutButtonText}</Link>
      </section>
    </>
  );
}

export default Profile;