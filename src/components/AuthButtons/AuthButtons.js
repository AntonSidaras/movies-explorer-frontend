import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes, authButtonsText } from '../../utils/constants';
import './AuthButtons.css';

function AuthButtons() {

  return (
    <div className='auth-buttons'>
      <Link className='auth-buttons__sign-up' to={appRoutes.auth.signUp}>
        <span className='auth-buttons__text'>{authButtonsText.signUp}</span>
      </Link>
      <Link className='auth-buttons__sign-in' to={appRoutes.auth.signIn}>
        <span className='auth-buttons__text auth-buttons__text_color_black'>{authButtonsText.signIn}</span>
      </Link>
    </div>
  );
}

export default AuthButtons;