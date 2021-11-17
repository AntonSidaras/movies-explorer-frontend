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
  const isAreaMovie = area === (areas.areaMovies || areas.areaSavedMovies);
  const isAreaMain = area === areas.areaMain;

  const navTab = isAreaMovie ? <NavTab /> : <></>;
  const accountButton = isAreaMovie ? <AccountButtons /> : <></>;
  const authButtons = isAreaMain ? <AuthButtons /> : <></>;
  console.log(user);

  return (
    <header className={`header ${isAreaMain ? "header_background_eagle-green" : ""}`}>
      <div className='header__container'>
        <div className='header__left-content'>
          <img className='header__logo' src={projectLogo} alt='Логотип проекта Movies Explorer' />
          {navTab}
        </div>
        <div className='header__right-content'>
          {authButtons}
          {accountButton}
        </div>
      </div>
    </header>
  );
}

export default Header;