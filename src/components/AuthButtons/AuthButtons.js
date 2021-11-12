import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButtons.css';

function AuthButtons() {

  return (
    <div className='auth-buttons'>
      <Link className='auth-buttons__sign-up' to='/signin'>
        <span className='auth-buttons__text'>Регистрация</span>
      </Link>
      <Link className='auth-buttons__sign-in' to='/signup'>
        <span className='auth-buttons__text auth-buttons__text_color_black'>Войти</span>
      </Link>
    </div>
  );
}

export default AuthButtons;