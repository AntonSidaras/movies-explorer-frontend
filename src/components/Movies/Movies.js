import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ area, moviesCards, isSaved }) {

  return (
    <>
      <Header area={area} isLoggedIn={true} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList
          moviesCards={moviesCards}
          isSaved={isSaved}
        />
      </main>
      <Footer area={area} />
    </>
  );
}

export default Movies;