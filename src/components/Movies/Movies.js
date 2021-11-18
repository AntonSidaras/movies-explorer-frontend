import React from 'react';
import Header from '../Header/Header';
import { areas } from '../../utils/constants';

function Movies() {

  return (
    <>
      <Header area={areas.areaMovies} />
    </>
  );
}

export default Movies;