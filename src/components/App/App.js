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
import {
  areas,
  appRoutes,
  appInitValues,
  defaultLoginTooltipData,
  localStorageKeys
} from "../../utils/constants";
import {
  isKeyExistInLocalStorage
} from "../../utils/utils";
import MainApi from "../../utils/MainApi";
import onSuccessAuth from '../../images/infotooltip/ok.svg';
import onFailureAuth from '../../images/infotooltip/fail.svg';
import './App.css';

function App() {

  const [jwt, setJWT] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(appInitValues.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [infoTooltipData, setInfoTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpened, setInfoTooltipOpened] = React.useState(false);
  const [isLoaderOpened, setIsLoaderOpened] = React.useState(false);
  const [moviesCards, setMoviesCards] = React.useState([]);

  const setUserInfoAndJWT = React.useCallback((initStage) => {
    MainApi.getUserInfo(jwt)
      .then((user) => {
        onSignIn({ user, jwt });
      })
      .catch((error) => {
        try {
          error.json()
            .then((err) => initStage ? console.error(error) : handleDisplayInfoTooltip({
              title: `Ошибка проверки пользователя: ${error.status} [${error.statusText}]`,
              texts: [err.message],
              image: onFailureAuth
            }))
            .catch((exeption) => console.error(exeption));
        } catch {
          initStage ? console.error(error) : handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureAuth
          })
        }
      });
  }, [jwt]);

  React.useEffect(() => {

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCards)) {
      setMoviesCards(JSON.parse(localStorage.getItem(localStorageKeys.moviesCards)));
    }

    setJWT(localStorage.getItem(localStorageKeys.jwt));

    if (jwt) {
      setUserInfoAndJWT(true);
    }
    setIsLoaderOpened(false);

  }, [setUserInfoAndJWT, jwt]);

  /*
    Аутентификация пользователя
  */

  function handleSignIn({ email, password }) {
    MainApi.signIn({ email, password })
      .then((response) => {
        setJWT(response.token);
        setUserInfoAndJWT(false);
      })
      .catch((error) => {
        try {
          error.json()
            .then((err) => handleDisplayInfoTooltip({
              title: `Ошибка входа: ${error.status} [${error.statusText}]`,
              texts: [err.message],
              image: onFailureAuth
            }))
            .catch((exeption) => console.error(exeption));
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureAuth
          })
        }
      });
  }

  function handleSignUp({ name, email, password }) {
    MainApi.signUp({ name, email, password })
      .then(() => {
        handleDisplayInfoTooltip({
          title: 'Вы успешно зарегистрировались!',
          texts: [],
          image: onSuccessAuth
        });
        handleSignIn({ email, password });
      })
      .catch((error) => {
        try {
          error.json()
            .then((err) => handleDisplayInfoTooltip({
              title: `Ошибка регистрации: ${error.status} [${error.statusText}]`,
              texts: [err.message],
              image: onFailureAuth
            }))
            .catch((exeption) => console.error(exeption));
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureAuth
          })
        }
      });
  }

  function handleSignOut() {
    MainApi.signOut()
      .then(() => {
        onSignOut();
        handleDisplayInfoTooltip({
          title: 'Вы вышли из аккаунта',
          texts: [],
          image: onSuccessAuth
        });
      })
      .catch((error) => {
        try {
          error.json()
            .then((err) => handleDisplayInfoTooltip({
              title: `Ошибка выхода: ${error.status} [${error.statusText}]`,
              texts: [err.message],
              image: onFailureAuth
            }))
            .catch((exeption) => console.error(exeption));
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureAuth
          })
        }
      });
  }

  function onSignIn({ user, jwt }) {
    setIsLoggedIn(true);
    localStorage.setItem(localStorageKeys.jwt, jwt);
    setJWT(jwt);
    setCurrentUser(user);
  }

  function onSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem(localStorageKeys.jwt);
    setJWT(null);
    setCurrentUser(appInitValues.user);
  }

  /*
    Управление открытием модального окна
   */
  function toggleOpenInfoTooltip() {
    isInfoTooltipOpened ? setInfoTooltipOpened(false) : setInfoTooltipOpened(true);
  }

  function handleDisplayInfoTooltip({ title, texts, image }) {
    setInfoTooltipOpened(true);
    setInfoTooltipData({ title, texts, image });
  }

  /*
    Управление 
  *//*
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
  }*/

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
                  moviesCards={moviesCards}
                  isSaved={false}
                />}
            />
            <Route
              exact path={appRoutes.content.savedMovies}
              element={
                <Movies
                  area={areas.areaSavedMovies}
                  moviesCards={moviesCards}
                  isSaved={true}
                />}
            />
            <Route
              exact path={appRoutes.profile}
              element={
                <Profile
                  onSignOut={handleSignOut}
                  onDisplayInfoTooltip={handleDisplayInfoTooltip}
                />}
            />
            <Route
              exact path={appRoutes.auth.signIn}
              element={
                <Login
                  onSignIn={handleSignIn}
                />}
            />
            <Route exact path={appRoutes.auth.signUp}
              element={
                <Register
                  onSignUp={handleSignUp}
                />}
            />
            <Route
              path={appRoutes.any}
              element={<NotFound />}
            />
          </Routes>
          <InfoTooltip
            isOpened={isInfoTooltipOpened}
            data={infoTooltipData}
            onClose={toggleOpenInfoTooltip}
          />
          <Loader
            isOpened={isLoaderOpened}
          />
        </div>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default App;
