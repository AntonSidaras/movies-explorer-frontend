import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InformationPopup/InfoTooltip'
import { appRoutes, appInitValues, defaultLoginTooltipData } from "../../utils/constants";
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState(appInitValues.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loginTooltipData, setloginTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  React.useEffect(() => {
    setCurrentUser(appInitValues.user);
  }, []);

  function handleSignIn({ email, password }) {
    console.log(email, password);
    setIsLoggedIn(true);
  }

  function handleSignUp({ name, email, password }) {
    console.log(name, email, password);
  }

  function handleSignOut() {
    setIsLoggedIn(false);
  }

  function toggleInfoTooltip() {
    isInfoTooltipOpen ? setInfoTooltipOpen(false) : setInfoTooltipOpen(true);
  }

  function handleDisplayInfoTooltip({ title, texts, image }) {
    toggleInfoTooltip();
    setloginTooltipData({ title, texts, image });
  }

  return (
    <Router>
      <CurrentUserContext.Provider value={{ currentUser: currentUser, isLoggedIn: isLoggedIn }}>
        <div className='app app__content'>
          <Routes>
            <Route exact path={appRoutes.root} element={<Main />} />
            <Route exact path={appRoutes.content.movies} element={<Movies />} />
            <Route exact path={appRoutes.content.savedMovies} element={<SavedMovies />} />
            <Route exact path={appRoutes.profile} element={<Profile onSignOut={handleSignOut} onDisplayInfoTooltip={handleDisplayInfoTooltip} />} />
            <Route exact path={appRoutes.auth.signIn} element={<Login onSignIn={handleSignIn} onDisplayInfoTooltip={handleDisplayInfoTooltip} />} />
            <Route exact path={appRoutes.auth.signUp} element={<Register onSignUp={handleSignUp} onDisplayInfoTooltip={handleDisplayInfoTooltip} />} />
            <Route path={appRoutes.any} element={<NotFound />} />
          </Routes>
          <InfoTooltip isOpen={isInfoTooltipOpen} data={loginTooltipData} onClose={toggleInfoTooltip} />
        </div>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
