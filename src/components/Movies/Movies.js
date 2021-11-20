import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { areas } from '../../utils/constants';

function Movies() {

  return (
    <>
      <Header area={areas.areaMovies} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;