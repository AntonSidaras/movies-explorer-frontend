import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Loader from '../Loader/Loader';
import { appRoutes, appInitValues, defaultLoginTooltipData } from "../../utils/constants";
import movieCards from "../../utils/movieCards";
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState(appInitValues.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loginTooltipData, setloginTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);
  const [moviesCards, setMoviesCards] = React.useState(movieCards);
  const [savedMoviesCards, setSavedMoviesCard] = React.useState([]);

  React.useEffect(() => {
    setCurrentUser(appInitValues.user);
    setIsLoaderOpen(false);
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

  function handleDeleteMovieCard(movieCard) {
    setMoviesCards((state) => state.filter(card => card._id !== movieCard._id));
    setSavedMoviesCard((state) => state.filter(card => card._id !== movieCard._id));
  }

  function handleToggleSaveMovieCard(movieCard) {

    const isAdded = movieCard.owner._id === currentUser._id;

    if (!isAdded) {
      const result = {
        _id: movieCard._id,
        image: movieCard.image,
        owner: {
          _id: currentUser._id
        }
      };

      setMoviesCards((state) => state.map((card) => card._id === movieCard._id ? result : card));
      setSavedMoviesCard([result, ...savedMoviesCards]);

    }
    else {
      const result = {
        _id: movieCard._id,
        image: movieCard.image,
        owner: {
          _id: '123456789'
        }
      };

      setMoviesCards((state) => state.map((card) => card._id === movieCard._id ? result : card));
      setSavedMoviesCard((state) => state.filter(card => card._id !== movieCard._id));
    }
  }

  function toggleOpenInfoTooltip() {
    isInfoTooltipOpen ? setInfoTooltipOpen(false) : setInfoTooltipOpen(true);
  }

  function handleDisplayInfoTooltip({ title, texts, image }) {
    toggleOpenInfoTooltip();
    setloginTooltipData({ title, texts, image });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser: currentUser, isLoggedIn: isLoggedIn }}>
      <Router>
        <div className='app app__content'>
          <Routes>
            <Route
              exact path={appRoutes.root}
              element={<Main />}
            />
            <Route
              exact path={appRoutes.content.movies}
              element={
                isLoggedIn ? <Movies
                  moviesCards={moviesCards}
                  isSaved={false}
                  onToggleSaveMovieCard={handleToggleSaveMovieCard}
                /> : <Navigate
                  to={appRoutes.root}
                />}
            />
            <Route
              exact path={appRoutes.content.savedMovies}
              element={
                isLoggedIn ? <Movies
                  moviesCards={savedMoviesCards}
                  isSaved={true}
                  onDeleteMoviesCard={handleDeleteMovieCard}
                /> : <Navigate
                  to={appRoutes.root}
                />}
            />
            <Route
              exact path={appRoutes.profile}
              element={
                isLoggedIn ? <Profile
                  onSignOut={handleSignOut}
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
                /> : <Navigate
                  to={appRoutes.root}
                />}
            />
            <Route
              exact path={appRoutes.auth.signIn}
              element={
                !isLoggedIn ? <Login
                  onSignIn={handleSignIn}
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
                /> : <Navigate
                  to={appRoutes.content.movies}
                />}
            />
            <Route exact path={appRoutes.auth.signUp}
              element={
                !isLoggedIn ? <Register
                  onSignUp={handleSignUp}
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
                /> : <Navigate
                  to={appRoutes.content.movies}
                />}
            />
            <Route
              path={appRoutes.any}
              element={<NotFound />}
            />
          </Routes>
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            data={loginTooltipData}
            onClose={toggleOpenInfoTooltip}
          />
          <Loader
            isOpen={isLoaderOpen}
          />
        </div>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default App;
