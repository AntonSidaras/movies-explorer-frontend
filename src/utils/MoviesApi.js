class BeatFilm {
  constructor({ server, handleResponse }) {
    this._server = server;
    this._handleResponse = handleResponse;
  }

  getMovies() {
    return fetch(this._server + '/beatfilm-movies', {
      method: 'GET'
    })
      .then(this._handleResponse);
  }
}

export default new BeatFilm({
  server: 'https://api.nomoreparties.co', handleResponse: (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
});