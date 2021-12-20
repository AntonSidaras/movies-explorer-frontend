import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ area, moviesCards, isSaved, onSearch, onFilter, onAddMore, totalSize }) {

  return (
    <>
      <Header area={area} />
      <main className='movies'>
        <SearchForm onSearch={onSearch} onFilter={onFilter} />
        <MoviesCardList
          moviesCards={moviesCards}
          isSaved={isSaved}
          totalSize={totalSize}
          onAddMore={onAddMore}
        />
      </main>
      <Footer area={area} />
    </>
  );
}

export default Movies;