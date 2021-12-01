import React from 'react';
import Navigation from '../Navigation/Navigation';
import './ExtraButton.css';

function ExtraButton({ area }) {

  const [isNavigationOpened, setIsNavigationOpened] = React.useState(false);

  function toggleNavigation() {
    isNavigationOpened ? setIsNavigationOpened(false) : setIsNavigationOpened(true);
  }

  return (
    <>
      <button className='extra-button' onClick={toggleNavigation} />
      <Navigation area={area} isOpened={isNavigationOpened} onToggleNavigation={toggleNavigation} />
    </>
  );
}

export default ExtraButton;