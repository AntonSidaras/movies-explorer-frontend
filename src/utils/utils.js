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

export {
  isKeyExistInLocalStorage,
  saveMoviesToLocalStorage,
  owerwriteMoviesToLocalStorage,
  saveMoviesToLocalStorageAtAppMount
}