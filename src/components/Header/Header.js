import React from 'react';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import AuthButtons from '../AuthButtons/AuthButtons';
import AccountButtons from '../AccountButton/AccountButton';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import projectLogo from '../../images/header/projectLogo.svg';
import { appRoutes, areas, headerText } from '../../utils/constants';
import './Header.css';

function Header({ area }) {

  const user = React.useContext(CurrentUserContext);
  const isAreaMain = area === areas.areaMain;
  const isAreaAuth = area === areas.areaAuth;

  const navTab = user.isLoggedIn ? <NavTab /> : <></>;
  const accountButton = user.isLoggedIn ? <AccountButtons /> : <></>;
  const authButtons = (!user.isLoggedIn && !isAreaAuth) ? <AuthButtons /> : <></>;

  return (
    <header className={`header ${isAreaMain ? 'header_background_eagle-green' : ''}`}>
      <div className={`header__container ${isAreaAuth ? 'header__container_width_full' : ''}`}>
        <div className='header__left-content'>
          <Link className='header__link' to={appRoutes.root}>
            <img className='header__logo' src={projectLogo} alt={headerText.alt} />
          </Link>
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