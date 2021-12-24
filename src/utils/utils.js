import { moviesServerRoot } from "./constants";

function isKeyExistInLocalStorage(key) {
  if (localStorage.getItem(key) === null) {
    return false;
  }
  else {
    return true;
  }
}

function saveMoviesToLocalStorage(key, movies, len) {
  localStorage.setItem(key, JSON.stringify(movies.slice(0, len)));
}

function owerwriteMoviesToLocalStorage(key, movies, len) {
  localStorage.removeItem(key);
  saveMoviesToLocalStorage(key, movies, len)
}

function saveMoviesToLocalStorageAtAppMount(key, movies, len) {
  if (!isKeyExistInLocalStorage(key)) {
    saveMoviesToLocalStorage(key, movies, len);
  }
}

function initialMoviesCount(width) {
  if (width > 1024)
    return 4;
  if (width > 500 && width <= 1024)
    return 2;
  if (width <= 500)
    return 5;
}

function filterMovies(movies, input) {
  function filterFunction(value) {

    if (!value.nameRU || !value.nameEN) {
      return false;
    }

    const nameRuCompare = value.nameRU.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    const nameEnCompare = value.nameEN.toLowerCase().indexOf(input.toLowerCase()) !== -1;

    return nameRuCompare || nameEnCompare;
  }

  return movies.filter(filterFunction);
}

function transformFromBeatFilm(movies) {

  return movies.map((movie) => {

    const trasformedMovie = {};

    trasformedMovie.movieId = movie.id;
    trasformedMovie.nameRU = movie.nameRU;
    trasformedMovie.nameEN = movie.nameEN;
    trasformedMovie.director = movie.director;
    trasformedMovie.country = movie.country;
    trasformedMovie.year = movie.year;
    trasformedMovie.duration = movie.duration;
    trasformedMovie.description = movie.description;
    trasformedMovie.trailer = movie.trailerLink;
    trasformedMovie.image = `${moviesServerRoot}${movie.image.url}`;
    trasformedMovie.thumbnail = trasformedMovie.image;

    return trasformedMovie;
  })
}

export {
  initialMoviesCount,
  filterMovies,
  transformFromBeatFilm,
  isKeyExistInLocalStorage,
  saveMoviesToLocalStorage,
  owerwriteMoviesToLocalStorage,
  saveMoviesToLocalStorageAtAppMount
}