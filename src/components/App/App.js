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
  isKeyExistInLocalStorage,
  filterMovies,
  initialMoviesCount
} from "../../utils/utils";
import MainApi from "../../utils/MainApi";
import BeatFilm from '../../utils/MoviesApi';
import onSuccessResponse from '../../images/infotooltip/ok.svg';
import onFailureResponse from '../../images/infotooltip/fail.svg';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState(appInitValues.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [infoTooltipData, setInfoTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpened, setInfoTooltipOpened] = React.useState(false);
  const [isLoaderOpened, setIsLoaderOpened] = React.useState(false);
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [moviesCardsVisible, setMoviesCardsVisible] = React.useState([]);
  const [moviesCardsUnfiltered, setMoviesCardsUnfiltered] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  /*
    API Responses
  */

  const displayResponseSuccess = (text) => {
    handleDisplayInfoTooltip({
      title: text,
      texts: [],
      image: onSuccessResponse
    });
  }

  const displayResponseError = (text, error) => {
    error.json()
      .then((err) => handleDisplayInfoTooltip({
        title: `${text} ${error.status} [${error.statusText}]`,
        texts: [err.message],
        image: onFailureResponse
      }))
      .catch((exeption) => console.error(exeption));
  }

  const displayUnknownError = React.useCallback(() => {
    handleDisplayInfoTooltip({
      title: 'Неизвестная ошибка',
      texts: [],
      image: onFailureResponse
    })
  }, []);

  /*
    Установка JWT и информации о пользователе
  */

  const setUserInfoAndJWT = React.useCallback((jwt, initStage) => {
    MainApi.getUserInfo(jwt)
      .then((user) => {
        onSignIn({ user, jwt });
      })
      .catch((error) => {
        localStorage.removeItem(localStorageKeys.jwt);
        try {
          error.json()
            .then((err) => initStage && error.status === 401 ? console.error(error) : handleDisplayInfoTooltip({
              title: `Ошибка проверки пользователя: ${error.status} [${error.statusText}]`,
              texts: [err.message],
              image: onFailureResponse
            }))
            .catch((exeption) => console.error(exeption));
        } catch {
          initStage ? console.error(error) : displayUnknownError();
        }
      });
  }, [displayUnknownError]);

  /*
    Монтирование компонента App
  */

  React.useEffect(() => {

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCardsVisible)) {
      setMoviesCardsVisible(JSON.parse(localStorage.getItem(localStorageKeys.moviesCardsVisible)));
    }

    const jwt = localStorage.getItem(localStorageKeys.jwt);

    if (jwt) {
      setUserInfoAndJWT(jwt, true);
    }
    setIsLoaderOpened(false);

  }, [setUserInfoAndJWT]);

  /*
    Аутентификация пользователя
  */

  const handleSignIn = ({ email, password }) => {
    MainApi.signIn({ email, password })
      .then((response) => {
        setUserInfoAndJWT(response.token, false);
      })
      .catch((error) => {
        try {
          displayResponseError('Ошибка входа:', error);
        } catch {
          displayUnknownError();
        }
      });
  }

  const handleSignUp = ({ name, email, password }) => {
    MainApi.signUp({ name, email, password })
      .then(() => {
        displayResponseSuccess('Вы успешно зарегистрировались!');
        handleSignIn({ email, password });
      })
      .catch((error) => {
        try {
          displayResponseError('Ошибка регистрации:', error);
        } catch {
          displayUnknownError();
        }
      });
  }

  const handleSignOut = () => {
    MainApi.signOut()
      .then(() => {
        onSignOut();
        displayResponseSuccess('Вы вышли из аккаунта');
      })
      .catch((error) => {
        try {
          displayResponseError('Ошибка выхода:', error);
        } catch {
          displayUnknownError();
        }
      });
  }

  const onSignIn = ({ user, jwt }) => {
    setIsLoggedIn(true);
    localStorage.setItem(localStorageKeys.jwt, jwt);
    setCurrentUser(user);
  }

  const onSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(localStorageKeys.jwt);
    setCurrentUser(appInitValues.user);
  }

  /*
    Редактирование пользователя
  */
  const handleUpdateUserInfo = ({ _id, email, name }, handleNewUserInfo) => {

    const jwt = localStorage.getItem(localStorageKeys.jwt);

    MainApi.updateUserInfo({ email, name }, jwt)
      .then(() => {
        displayResponseSuccess('Данные успешно изменены');
        setCurrentUser({ _id, email, name });
        handleNewUserInfo(true);
      })
      .catch((error) => {
        try {
          displayResponseError('Ошибка изменения профиля:', error);
        } catch {
          displayUnknownError();
        }
      });
  }

  /*
    Управление открытием модального окна
  */
  const toggleOpenInfoTooltip = () => {
    isInfoTooltipOpened ? setInfoTooltipOpened(false) : setInfoTooltipOpened(true);
  }

  const handleDisplayInfoTooltip = ({ title, texts, image }) => {
    setInfoTooltipOpened(true);
    setInfoTooltipData({ title, texts, image });
  }

  /*
    Загрузка фильмов
  */

  const handleSearch = (input) => {
    const deviceWidth = window.innerWidth;
    const count = initialMoviesCount(deviceWidth);
    setIsLoaderOpened(true);
    BeatFilm.getMovies()
      .then((result) => {
        const filteredResult = filterMovies(result, input);
        setMoviesCards(filteredResult); //все найденные
        setMoviesCardsVisible(filteredResult.slice(0, count)); //первоначальные
        setPosition(count);
        localStorage.setItem(localStorageKeys.moviesCardsVisible, JSON.stringify(filteredResult.slice(0, count)));
        //localStorage.setItem(localStorageKeys.moviesCards, JSON.stringify(filteredResult));
      })
      .catch((error) => {
        handleDisplayInfoTooltip({
          title: 'Ошибка',
          texts: ['Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз', error.status],
          image: onFailureResponse
        })
      })
      .finally(() => {
        setIsLoaderOpened(false);
      });
  }

  const handleFilterShortMeter = (state) => {
    if (state) {
      setMoviesCardsUnfiltered(moviesCardsVisible);
      setMoviesCardsVisible(moviesCardsVisible.filter(movie => movie.duration <= 40))
    }
    else {
      setMoviesCardsVisible(moviesCardsUnfiltered);
    }
  }

  const handleAddMoreMovies = (deviceWidth) => {
    const count = initialMoviesCount(deviceWidth);
    const nextPosition = position + count;
    const newMovies = moviesCards.slice(position, nextPosition);

    setMoviesCardsVisible([...moviesCardsVisible, ...newMovies]);
    setPosition(nextPosition);
    localStorage.setItem(localStorageKeys.moviesCardsVisible, JSON.stringify(moviesCardsVisible));
  }

  /*
    Управление 
  */

  const handleToggleSave = (state, {
    movieId,
    nameRU,
    nameEN,
    director,
    country,
    year,
    duration,
    description,
    trailer,
    image,
    thumbnail
  }) => {
    if (state) {
      setSavedMovies([{
        movieId,
        nameRU,
        nameEN,
        director,
        country,
        year,
        duration,
        description,
        trailer,
        image,
        thumbnail
      }, ...savedMovies]);
      console.log('Added');
    }
    else {
      setSavedMovies((state) => state.filter(card => card._id !== movieId));
      console.log('Removed');
    }
  }


  /*
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
                  onSearch={handleSearch}
                  onFilter={handleFilterShortMeter}
                  onAddMore={handleAddMoreMovies}
                  onToggleSave={handleToggleSave}
                  area={areas.areaMovies}
                  moviesCards={moviesCardsVisible}
                  totalSize={moviesCards.length}
                />}
            />
            <Route
              exact path={appRoutes.content.savedMovies}
              element={
                <Movies
                  onSearch={null}
                  onFilter={null}
                  onAddMore={null}
                  onToggleSave={null}
                  area={areas.areaSavedMovies}
                  moviesCards={savedMovies}
                  totalSize={0}
                />}
            />
            <Route
              exact path={appRoutes.profile}
              element={
                <Profile
                  onSignOut={handleSignOut}
                  onUpdateUserInfo={handleUpdateUserInfo}
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
