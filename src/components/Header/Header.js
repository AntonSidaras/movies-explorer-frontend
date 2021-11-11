import React from 'react';
import './Header.css';
import NavTab from '../NavTab/NavTab';
import projectLogo from '../../images/header/projectLogo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { areas } from '../../utils/constants';

function Header({ area }) {
  const user = React.useContext(CurrentUserContext);

  const navTab = (area === areas.areaMovies ? <NavTab /> : <></>);
  console.log(user);

  return (
    <header className='header border'>
      <div className='header__left-content'>
        <img className='header__logo' src={projectLogo} alt='Логотип проекта Movies Explorer' />
        {navTab}
      </div>
      <div className='header__right-content border'></div>
    </header>
  );
}

export default Header;