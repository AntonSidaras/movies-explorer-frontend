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
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState({ name: "Антон", email: 'a.sidaras@yandex.ru', id: 0 });

  return (
    <Router>
      <CurrentUserContext.Provider value={{ currentUser: currentUser, isLoggedIn: false }}>
        <div className='app app__content'>
          <Routes>
            {/* О проекте */}
            <Route exact path='/' element={<Main />} />
            {/* Фильмы */}
            <Route exact path='/movies' element={<Movies />} />
            {/* Сохранённые фильмы */}
            <Route exact path='/saved-movies' element={<SavedMovies />} />
            {/* Профиль */}
            <Route exact path='/profile' element={<Profile />} />
            {/* Вход */}
            <Route exact path='/signin' element={<Login />} />
            {/* Регистрация */}
            <Route exact path='/signup' element={<Register />} />
            {/* 404 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
