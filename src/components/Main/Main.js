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
    <div className='main'>
      <div className='main__section main__section_backgroung_eagle-green'>
        <Header area={areas.areaMain} />
        <Promo />
      </div>
      <div className='main__section'>
        <AboutProject />
      </div>
      <div className='main__section main__section_backgroung_signal-black'>
        <Techs />
      </div>
      <div className='main__section'>
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default Main;