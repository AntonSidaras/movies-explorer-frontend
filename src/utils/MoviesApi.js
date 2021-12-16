import { moviesServerRoot } from "./constants";
class BeatFilm {
  constructor({ server, handleResponse }) {
    this._server = server;
    this._handleResponse = handleResponse;
    this._getEndPoint = '/beatfilm-movies';
  }

  getMovies() {
    return fetch(`${this._server}${this._getEndPoint}`, {
      method: 'GET'
    })
      .then(this._handleResponse);
  }
}

export default new BeatFilm({
  server: moviesServerRoot, handleResponse: (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
});

/*BeatFilm.getMovies()
      .then((result) => {
        setMoviesCards(result);
        saveMoviesToLocalStorageAtAppMount(localStorageKeys.moviesCards, result, 12);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });*/