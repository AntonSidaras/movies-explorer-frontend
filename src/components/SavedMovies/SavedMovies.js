import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { areas } from '../../utils/constants';

function SavedMovies() {

  return (
    <>
      <Header area={areas.areaSavedMovies} />
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList area={areas.areaSavedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;