import React from 'react';
import NavTab from '../NavTab/NavTab';
import AuthButtons from '../AuthButtons/AuthButtons';
import AccountButtons from '../AccountButton/AccountButton';
import projectLogo from '../../images/header/projectLogo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { areas } from '../../utils/constants';
import './Header.css';

function Header({ area }) {
  const user = React.useContext(CurrentUserContext);
  const isMovieArea = area === (areas.areaMovies || areas.areaSavedMovies);
  const isMainArea = area === areas.areaMain;

  const navTab = isMovieArea ? <NavTab /> : <></>;
  const accountButton = isMovieArea ? <AccountButtons /> : <></>;
  const authButtons = isMainArea ? <AuthButtons /> : <></>;
  console.log(user);

  return (
    <header className='header'>
      <div className='header__left-content'>
        <img className='header__logo' src={projectLogo} alt='Логотип проекта Movies Explorer' />
        {navTab}
      </div>
      <div className='header__right-content'>
        {authButtons}
        {accountButton}
      </div>
    </header>
  );
}

export default Header;