import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Loader from '../Loader/Loader';
import { areas, appRoutes, defaultLoginTooltipData } from "../../utils/constants";
import movieCards from "../../utils/movieCards";
import './App.css';

function App() {

  const [loginTooltipData, setloginTooltipData] = React.useState(defaultLoginTooltipData);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);

  React.useEffect(() => {
    setIsLoaderOpen(false);
  }, []);

  function toggleOpenInfoTooltip() {
    isInfoTooltipOpen ? setInfoTooltipOpen(false) : setInfoTooltipOpen(true);
  }

  function handleDisplayInfoTooltip({ title, texts, image }) {
    toggleOpenInfoTooltip();
    setloginTooltipData({ title, texts, image });
  }

  return (
    <Router>
      <div className='app app__content'>
        <Routes>
          <Route exact path={appRoutes.root} element={<Main />} />
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
          <Route exact path={appRoutes.auth.signIn} element={<Login />} />
          <Route exact path={appRoutes.auth.signUp}
            element={
              <Register
                onDisplayInfoTooltip={handleDisplayInfoTooltip}
              />}
          />
          <Route path={appRoutes.any} element={<NotFound />} />
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
  );
}

export default App;
