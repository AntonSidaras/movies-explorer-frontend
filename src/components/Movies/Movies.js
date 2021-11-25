import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { areas } from '../../utils/constants';
import './Movies.css';

function Movies() {

  return (
    <>
      <Header area={areas.areaMovies} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList area={areas.areaMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;