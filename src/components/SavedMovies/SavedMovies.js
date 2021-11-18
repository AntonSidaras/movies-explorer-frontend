import React from 'react';
import Header from '../Header/Header';
import { areas } from '../../utils/constants';

function SavedMovies() {

  return (
    <>
      <Header area={areas.areaSavedMovies} />
    </>
  );
}

export default SavedMovies;