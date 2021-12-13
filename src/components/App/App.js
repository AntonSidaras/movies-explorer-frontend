import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Loader from '../Loader/Loader';
import { areas, appRoutes, appInitValues, defaultLoginTooltipData } from "../../utils/constants";
import BeatFilm from '../../utils/MoviesApi';
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
    BeatFilm.getMovies()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setCurrentUser(appInitValues.user);
    setIsLoaderOpen(false);
  }, []);

  /*
    Аутентификация пользователя
  */
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

  /*
    Управление открытием модального окна
   */
  function toggleOpenInfoTooltip() {
    isInfoTooltipOpen ? setInfoTooltipOpen(false) : setInfoTooltipOpen(true);
  }

  function handleDisplayInfoTooltip({ title, texts, image }) {
    toggleOpenInfoTooltip();
    setloginTooltipData({ title, texts, image });
  }

  /*
    Управление 
  */
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

  /*
    Вёрстка компонента
  */
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
                <Movies
                  area={areas.areaMovies}
                  moviesCards={movieCards}
                  isSaved={false}
                />}
            />
            <Route
              exact path={appRoutes.content.savedMovies}
              element={
                <Movies
                  area={areas.areaSavedMovies}
                  moviesCards={movieCards}
                  isSaved={true}
                />}
            />
            <Route
              exact path={appRoutes.profile}
              element={
                <Profile
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
                />}
            />
            <Route
              exact path={appRoutes.auth.signIn}
              element={<Login />}
            />
            <Route exact path={appRoutes.auth.signUp}
              element={
                <Register
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
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
