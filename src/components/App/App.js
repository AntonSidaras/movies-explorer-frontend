import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
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
  transformFromBeatFilm,
  initialMoviesCount
} from "../../utils/utils";
import MainApi from "../../utils/MainApi";
import BeatFilm from '../../utils/MoviesApi';
import onSuccessResponse from '../../images/infotooltip/ok.svg';
import onFailureResponse from '../../images/infotooltip/fail.svg';
import './App.css';

function App() {

  const checkboxState = isKeyExistInLocalStorage(localStorageKeys.filterCkeckboxSatate) ?
    JSON.parse(localStorage.getItem(localStorageKeys.filterCkeckboxSatate))
    : false;

  const checkboxSavedState = isKeyExistInLocalStorage(localStorageKeys.filterCkeckboxSavedSatate) ?
    JSON.parse(localStorage.getItem(localStorageKeys.filterCkeckboxSavedSatate))
    : false;

  const [filterCkeckboxSatate, setFilterCkeckboxSatate] = React.useState(checkboxState);
  const [filterCkeckboxSavedSatate, setfilterCkeckboxSavedSatate] = React.useState(checkboxSavedState);

  const [currentUser, setCurrentUser] = React.useState(appInitValues.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [infoTooltipData, setInfoTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpened, setInfoTooltipOpened] = React.useState(false);
  const [isLoaderOpened, setIsLoaderOpened] = React.useState(false);
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [moviesCardsSearched, setMoviesCardsSearched] = React.useState([]);
  const [moviesCardsVisible, setMoviesCardsVisible] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesVisible, setSavedMoviesVisible] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  /*
    Монтирование компонента App
  */

  const loadPage = (token) => {
    Promise.all([MainApi.getUserInfo(token), MainApi.getSavedMovies(token)])
      .then(([user, movies]) => {
        setCurrentUser(user);
        const savedMovies = movies.filter(movie => movie.owner._id === user._id);
        setSavedMovies(savedMovies);
        setSavedMoviesVisible(savedMovies);
      })
      .catch(([userError, moviesError]) => {
        localStorage.removeItem(localStorageKeys.jwt);
        setIsLoggedIn(false);
        console.error(userError, moviesError);
      });
  }

  React.useEffect(() => {

    const jwt = localStorage.getItem(localStorageKeys.jwt);

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCards)) {
      setMoviesCards(JSON.parse(localStorage.getItem(localStorageKeys.moviesCards)));
    }

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCardsSearched)) {
      setMoviesCardsSearched(JSON.parse(localStorage.getItem(localStorageKeys.moviesCardsSearched)));
    }

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCardsVisible)) {
      setMoviesCardsVisible(JSON.parse(localStorage.getItem(localStorageKeys.moviesCardsVisible)));
    }

    if (isKeyExistInLocalStorage(localStorageKeys.position)) {
      setPosition(JSON.parse(localStorage.getItem(localStorageKeys.position)));
    }

    if (jwt) {
      loadPage(jwt);
    }
    else {
      setIsLoggedIn(false);
    }

  }, []);

  /*
    Аутентификация пользователя
  */

  const handleSignIn = ({ email, password }, setFormAttributeDisabled) => {
    MainApi.signIn({ email, password })
      .then((response) => {
        setIsLoggedIn(true);
        localStorage.setItem(localStorageKeys.jwt, response.token);
        loadPage(response.token);
      })
      .catch((error) => {
        setFormAttributeDisabled(false);
        try {
          displayResponseError('Ошибка входа:', error);
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureResponse
          });
        }
      });
  }

  const handleSignUp = ({ name, email, password }, setFormAttributeDisabled) => {
    MainApi.signUp({ name, email, password })
      .then(() => {
        displayResponseSuccess('Вы успешно зарегистрировались!');
        handleSignIn({ email, password });
      })
      .catch((error) => {
        setFormAttributeDisabled(false);
        try {
          displayResponseError('Ошибка регистрации:', error);
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureResponse
          });
        }
      });
  }

  const handleSignOut = () => {
    MainApi.signOut()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem(localStorageKeys.jwt);
        localStorage.removeItem(localStorageKeys.moviesCards);
        localStorage.removeItem(localStorageKeys.moviesCardsSearched);
        localStorage.removeItem(localStorageKeys.moviesCardsVisible);
        localStorage.removeItem(localStorageKeys.position);
        localStorage.removeItem(localStorageKeys.filterCkeckboxSatate);
        localStorage.removeItem(localStorageKeys.filterCkeckboxSavedSatate);
        localStorage.removeItem(localStorageKeys.user);
        setCurrentUser(appInitValues.user);
        setMoviesCards([]);
        setMoviesCardsSearched([]);
        setMoviesCardsVisible([]);
        setSavedMovies([]);
        setSavedMoviesVisible([]);
        displayResponseSuccess('Вы вышли из аккаунта');
      })
      .catch((error) => {
        try {
          displayResponseError('Ошибка выхода:', error);
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureResponse
          });
        }
      });
  }

  /*
    Редактирование пользователя
  */
  const handleUpdateUserInfo = ({ _id, email, name }, handleNewUserInfo, setFormAttributeDisabled) => {

    const jwt = localStorage.getItem(localStorageKeys.jwt);

    MainApi.updateUserInfo({ email, name }, jwt)
      .then(() => {
        displayResponseSuccess('Данные успешно изменены');
        setCurrentUser({ _id, email, name });
        setFormAttributeDisabled(false);
        handleNewUserInfo(true);
      })
      .catch((error) => {
        setFormAttributeDisabled(false);
        try {
          displayResponseError('Ошибка изменения профиля:', error);
        } catch {
          handleDisplayInfoTooltip({
            title: 'Неизвестная ошибка',
            texts: [],
            image: onFailureResponse
          });
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
    Поиск по фильмам
  */

  const handleSearch = (input, notFound) => {
    const deviceWidth = window.innerWidth;
    const count = initialMoviesCount(deviceWidth);

    const onSearch = (movies) => {
      const transformedResult = movies;
      const filteredResult = filterMovies(transformedResult, input);
      if (filteredResult.length === 0) {
        notFound();
      }
      setMoviesCards(transformedResult); //все
      setMoviesCardsSearched(filteredResult); //все найденные
      setMoviesCardsVisible(filteredResult.slice(0, count)); //отображаемые
      setPosition(count);
      localStorage.setItem(localStorageKeys.position, JSON.stringify(count));
      return filteredResult;
    }

    if (isKeyExistInLocalStorage(localStorageKeys.moviesCards)) {
      const filteredResult = onSearch(moviesCards);
      localStorage.setItem(localStorageKeys.moviesCardsSearched, JSON.stringify(filteredResult));
      localStorage.setItem(localStorageKeys.moviesCardsVisible, JSON.stringify(filteredResult.slice(0, count)));
      return;
    }

    setIsLoaderOpened(true);
    BeatFilm.getMovies()
      .then((result) => {
        const filteredResult = onSearch(transformFromBeatFilm(result));
        localStorage.setItem(localStorageKeys.moviesCards, JSON.stringify(transformFromBeatFilm(result)));
        localStorage.setItem(localStorageKeys.moviesCardsSearched, JSON.stringify(filteredResult));
        localStorage.setItem(localStorageKeys.moviesCardsVisible, JSON.stringify(filteredResult.slice(0, count)));
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

  /*
    Поиск по сохранённым фильмам
  */

  const handleSearchSaved = (input, notFound) => {
    const filteredResult = filterMovies(savedMovies, input);
    setSavedMoviesVisible(filteredResult);
    if (filteredResult.length === 0) {
      notFound();
    }
  }

  /*
    Фильтрация короткометражек
  */

  const handleFilterShortMeter = (state) => {
    if (state) {
      setFilterCkeckboxSatate(true);
      localStorage.setItem(localStorageKeys.filterCkeckboxSatate, JSON.stringify(true));
    }
    else {
      setFilterCkeckboxSatate(false);
      localStorage.setItem(localStorageKeys.filterCkeckboxSatate, JSON.stringify(false));
    }
  }

  const handleFilterShortMeterSaved = (state) => {
    if (state) {
      setfilterCkeckboxSavedSatate(true);
      localStorage.setItem(localStorageKeys.filterCkeckboxSavedSatate, JSON.stringify(true));
    }
    else {
      setfilterCkeckboxSavedSatate(false);
      localStorage.setItem(localStorageKeys.filterCkeckboxSavedSatate, JSON.stringify(false));
    }
  }

  /*
    Добавить ещё фильмов
  */

  const handleAddMoreMovies = (deviceWidth) => {
    const count = initialMoviesCount(deviceWidth);
    const nextPosition = position + count;
    const newMovies = moviesCardsSearched.slice(position, nextPosition);
    const visibleMovies = [...moviesCardsVisible, ...newMovies];

    setMoviesCardsVisible(visibleMovies);
    setPosition(nextPosition);
    localStorage.setItem(localStorageKeys.position, JSON.stringify(nextPosition));
    localStorage.setItem(localStorageKeys.moviesCardsVisible, JSON.stringify(visibleMovies));
  }

  /*
    Управление 
  */

  const handleDeleteFromSaved = (movie) => {
    const jwt = localStorage.getItem(localStorageKeys.jwt);
    let id = movie._id;

    if (id === undefined) {
      savedMovies.forEach(item => {
        if (item.owner._id === currentUser._id && item.movieId === movie.movieId) {
          id = item._id;
        }
      });
    }

    MainApi.deleteMovie({ movieId: id }, jwt)
      .then(() => {
        setSavedMovies((state) => state.filter(card => card.movieId !== movie.movieId));
        setSavedMoviesVisible((state) => state.filter(card => card.movieId !== movie.movieId));
      })
      .catch((error) => {
        handleDisplayInfoTooltip({
          title: 'Ошибка',
          texts: [error.status],
          image: onFailureResponse
        })
      })
  }

  const handleToggleSave = (state, moviesCard) => {
    const jwt = localStorage.getItem(localStorageKeys.jwt);

    if (state) {
      MainApi.saveMovie(moviesCard, jwt)
        .then((result) => {
          setSavedMovies([result, ...savedMovies]);
          setSavedMoviesVisible([result, ...savedMoviesVisible]);
        })
        .catch((error) => {
          handleDisplayInfoTooltip({
            title: 'Ошибка',
            texts: [error.status],
            image: onFailureResponse
          })
        });
    }
    else {
      handleDeleteFromSaved(moviesCard);
    }
  }

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

  /*
    Вёрстка компонента
  */
  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ currentUser: currentUser, isLoggedIn: isLoggedIn, savedMovies: savedMovies }}>
        <div className='app app__content'>
          <Routes>
            <Route
              exact path={appRoutes.root}
              element={<Main />}
            />
            <Route
              exact path={appRoutes.content.movies}
              element={
                <ProtectedRoute>
                  <Movies
                    onSearch={handleSearch}
                    onFilter={handleFilterShortMeter}
                    onAddMore={handleAddMoreMovies}
                    onToggleSave={handleToggleSave}
                    onDelete={null}
                    area={areas.areaMovies}
                    moviesCards={moviesCardsVisible}
                    savedMovies={savedMovies}
                    totalSize={moviesCardsSearched.length}
                    filterState={filterCkeckboxSatate}
                  />
                </ProtectedRoute>}
            />
            <Route
              exact path={appRoutes.content.savedMovies}
              element={
                <ProtectedRoute>
                  <SavedMovies
                    onSearch={handleSearchSaved}
                    onFilter={handleFilterShortMeterSaved}
                    onAddMore={null}
                    onToggleSave={null}
                    onDelete={handleDeleteFromSaved}
                    area={areas.areaSavedMovies}
                    moviesCards={savedMoviesVisible}
                    savedMovies={savedMovies}
                    totalSize={0}
                    filterState={filterCkeckboxSavedSatate}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              exact path={appRoutes.profile}
              element={
                <ProtectedRoute>
                  <Profile
                    onSignOut={handleSignOut}
                    onUpdateUserInfo={handleUpdateUserInfo}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              exact path={appRoutes.auth.signIn}
              element={
                !isLoggedIn ? <Login
                  onSignIn={handleSignIn}
                /> : <Navigate
                  to={appRoutes.content.movies}
                />}
            />
            <Route exact path={appRoutes.auth.signUp}
              element={
                !isLoggedIn ? <Register
                  onSignUp={handleSignUp}
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
            isOpened={isInfoTooltipOpened}
            data={infoTooltipData}
            onClose={toggleOpenInfoTooltip}
          />
          <Loader
            isOpened={isLoaderOpened}
          />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
