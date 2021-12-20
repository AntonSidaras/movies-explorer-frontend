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
  if (width >= 1280)
    return 12;
  if (width > 480 && width < 1280)
    return 8;
  if (width <= 480)
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



export {
  initialMoviesCount,
  filterMovies,
  isKeyExistInLocalStorage,
  saveMoviesToLocalStorage,
  owerwriteMoviesToLocalStorage,
  saveMoviesToLocalStorageAtAppMount
}