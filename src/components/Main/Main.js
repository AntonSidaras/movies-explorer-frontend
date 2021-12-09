import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { areas } from '../../utils/constants';
import './Main.css';

function Main() {

  return (
    <>
      <Header area={areas.areaMain} isLoggedIn={false} />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer area={areas.areaMain} />
    </>
  );
}

export default Main;
