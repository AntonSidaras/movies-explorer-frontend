import React from 'react';
import Movies from '../Movies/Movies';

function SavedMovies({ moviesCards }) {

  return (
    <Movies moviesCards={moviesCards} isSaved={true} />
  );
}

export default SavedMovies;