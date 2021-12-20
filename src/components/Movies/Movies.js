import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ area, moviesCards, savedMovies, onSearch, onFilter, onAddMore, onToggleSave, onDelete, filterState, totalSize }) {

  return (
    <>
      <Header area={area} />
      <main className='movies'>
        <SearchForm onSearch={onSearch} onFilter={onFilter} filterState={filterState} />
        <MoviesCardList
          moviesCards={moviesCards}
          savedMovies={savedMovies}
          area={area}
          totalSize={totalSize}
          onAddMore={onAddMore}
          onToggleSave={onToggleSave}
          onDelete={onDelete}
        />
      </main>
      <Footer area={area} />
    </>
  );
}

export default Movies;