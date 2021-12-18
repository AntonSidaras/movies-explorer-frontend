class MainApi {
  constructor({ server, handleResponse }) {
    this._server = server;
    this._handleResponse = handleResponse;
    this._signUp = "/signup"; //регистрация
    this._signIn = "/signin"; //вход
    this._usersMe = "/users/me"; //данные об авторизованном пользователе
    this._contentType = "application/json";
  }

  signUp({ name, email, password }) {
    return fetch(`${this._server}${this._signUp}`, {
      method: "POST",
      headers: {
        "Content-Type": this._contentType
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password,
      })
    }).then(this._handleResponse);
  }

  signIn({ email, password }) {
    return fetch(this._server + this._signIn, {
      method: "POST",
      headers: {
        "Content-Type": this._contentType
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      })
    }).then(this._handleResponse);
  }

  signOut() {
    return fetch(this._server + this._signIn, {
      method: "POST",
      headers: {
        "Content-Type": this._contentType
      },
      body: JSON.stringify({})
    }).then(this._handleResponse);
  }

  getUserInfo(jwt) {
    return fetch(`${this._server}${this._usersMe}`, {
      method: "GET",
      headers: {
        "Content-Type": this._contentType,
        "Authorization": `Bearer ${jwt}`
      }
    })
      .then(this._handleResponse);
  }

}

export default new MainApi({
  server: 'https://api.asidaras.movies.nomoredomains.club', handleResponse: (res) => {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }
});