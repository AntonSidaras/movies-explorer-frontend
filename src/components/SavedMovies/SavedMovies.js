import React from 'react';
import Movies from '../Movies/Movies';

function SavedMovies({ area, moviesCards, savedMovies, onSearch, onFilter, onAddMore, onToggleSave, onDelete, filterState, totalSize }) {

  return (
    <Movies
      onSearch={onSearch}
      onFilter={onFilter}
      onAddMore={onAddMore}
      onToggleSave={onToggleSave}
      onDelete={onDelete}
      area={area}
      moviesCards={moviesCards}
      savedMovies={savedMovies}
      totalSize={totalSize}
      filterState={filterState}
    />
  );
}

export default SavedMovies;