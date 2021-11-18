import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { areas } from '../../utils/constants';
import './Profile.css';

function Profile() {

  const user = React.useContext(CurrentUserContext);

  return (
    <>
      <Header area={areas.areaProfile} />
      <section className='profile__section'>
        <h2 className='profile__title'>Привет, {user.currentUser.name}</h2>
        <form className='profile__form' noValidate>
          <fieldset className='profile__fieldset'>
            <input className='profile__input' value={user.currentUser.name} />
            <span className='profile__special-placeholder'>Имя</span>
            <input className='profile__input' value={user.currentUser.email} />
            <span className='profile__special-placeholder'>E-mail</span>
          </fieldset>
          <button className='profile__edit-button'>Редактировать</button>
        </form>
        <Link className='profile__logout' to='/'>Выйти из аккаунта</Link>
      </section>
    </>
  );
}

export default Profile;