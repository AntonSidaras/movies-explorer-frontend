import React from 'react';
import { Link } from 'react-router-dom';
import { authButtonText } from '../../utils/constants';
import './AuthButtons.css';

function AuthButtons() {

  return (
    <div className='auth-buttons'>
      <Link className='auth-buttons__sign-up' to='/signin'>
        <span className='auth-buttons__text'>{authButtonText.signUp}</span>
      </Link>
      <Link className='auth-buttons__sign-in' to='/signup'>
        <span className='auth-buttons__text auth-buttons__text_color_black'>{authButtonText.signIn}</span>
      </Link>
    </div>
  );
}

export default AuthButtons;