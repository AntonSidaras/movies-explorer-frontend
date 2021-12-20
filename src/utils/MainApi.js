import { mainApiServerRoot } from "./constants";
class MainApi {
  constructor({ server, handleResponse }) {
    this._server = server;
    this._handleResponse = handleResponse;
    this._signUp = '/signup'; //регистрация
    this._signIn = '/signin'; //вход
    this._signOut = '/signout';
    this._usersMe = '/users/me'; //данные об авторизованном пользователе
    this._movies = '/movies'; //фильмы
    this._contentType = 'application/json';
  }

  signUp({ name, email, password }) {
    return fetch(`${this._server}${this._signUp}`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then(this._handleResponse);
  }

  signIn({ email, password }) {
    return fetch(`${this._server}${this._signIn}`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        email,
        password,
      })
    }).then(this._handleResponse);
  }

  signOut() {
    return fetch(`${this._server}${this._signOut}`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType
      },
      body: JSON.stringify({})
    }).then(this._handleResponse);
  }

  getUserInfo(jwt) {
    return fetch(`${this._server}${this._usersMe}`, {
      method: 'GET',
      headers: {
        'Content-Type': this._contentType,
        'Authorization': `Bearer ${jwt}`
      }
    }).then(this._handleResponse);
  }

  updateUserInfo({ email, name }, jwt) {
    return fetch(`${this._server}${this._usersMe}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': this._contentType,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        email,
        name,
      })
    }).then(this._handleResponse);
  }

  getSavedMovies(jwt) {
    return fetch(`${this._server}${this._movies}`, {
      method: 'GET',
      headers: {
        'Content-Type': this._contentType,
        'Authorization': `Bearer ${jwt}`
      }
    }).then(this._handleResponse);
  }

  saveMovie(movieCard, jwt) {
    return fetch(`${this._server}${this._movies}`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        movieId: movieCard.movieId,
        nameRU: movieCard.nameRU,
        nameEN: movieCard.nameEN,
        director: movieCard.director,
        country: movieCard.country,
        year: movieCard.year,
        duration: movieCard.duration,
        description: movieCard.description,
        trailer: movieCard.trailer,
        image: movieCard.image,
        thumbnail: movieCard.thumbnail
      })
    }).then(this._handleResponse);
  }

  deleteMovie({ movieId }, jwt) {
    return fetch(`${this._server}${this._movies}/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': this._contentType,
        'Authorization': `Bearer ${jwt}`
      }
    }).then(this._handleResponse);
  }

}

export default new MainApi({
  server: mainApiServerRoot, handleResponse: (res) => {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }
});