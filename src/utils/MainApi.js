import { BASE_URL_MAIN } from "./const";

class Api {
  constructor(parameter) {
    this._baseUrl = parameter.baseUrl;
    this._token = parameter.token;
  }

  _checkResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(console.log(`Ошибка: ${response.status}`));
  }

  getMovies() {
    return fetch(this._baseUrl + "/movies", {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  getUser() {
    return fetch(this._baseUrl + "/users/me ", {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  setUserData(data) {
    return fetch(this._baseUrl + "/users/me ", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((response) => this._checkResponse(response));
  }

  addLikeMovie(data) {
    return fetch(this._baseUrl + "/cards ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((response) => this._checkResponse(response));
  }

  setLike(cardID) {
    return fetch(this._baseUrl + "/cards/" + cardID + "/likes", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  delLike(cardID) {
    return fetch(this._baseUrl + "/cards/" + cardID + "/likes", {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  changeLikeCardStatus(cardID, isLiked) {
    if (isLiked) {
      return this.setLike(cardID, this._token);
    } else {
      return this.delLike(cardID, this._token);
    }
  }

  delLikeMovie(cardID) {
    return fetch(this._baseUrl + "/cards/" + cardID, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }
}

const apiMain = new Api({
  baseUrl: BASE_URL_MAIN,
  token: localStorage.token,
});

export default apiMain;
