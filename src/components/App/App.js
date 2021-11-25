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
import { appRoutes, appInitValues } from "../../utils/constants";
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    setCurrentUser(appInitValues.user);
  }, []);

  return (
    <Router>
      <CurrentUserContext.Provider value={{ currentUser: currentUser, isLoggedIn: false }}>
        <div className='app app__content'>
          <Routes>
            <Route exact path={appRoutes.root} element={<Main />} />
            <Route exact path={appRoutes.content.movies} element={<Movies />} />
            <Route exact path={appRoutes.content.savedMovies} element={<SavedMovies />} />
            <Route exact path={appRoutes.profile} element={<Profile />} />
            <Route exact path={appRoutes.auth.signIn} element={<Login />} />
            <Route exact path={appRoutes.auth.signUp} element={<Register />} />
            <Route path={appRoutes.any} element={<NotFound />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
