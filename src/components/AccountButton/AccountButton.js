import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../utils/constants';
import './AccountButton.css';

function AccountButton() {

  return (
    <Link className='account-button' to={appRoutes.profile} />
  );
}

export default AccountButton;