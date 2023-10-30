import { BASE_URL_MAIN, BASE_URL_MOVIES } from "./const";

class Api {
  constructor(parameter) {
    this._baseUrl = parameter.baseUrl;
    this._moviesImageUrl = parameter.moviesImageUrl;
    this._token = parameter.token;
  }

  _checkResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(
          console.log(`Ошибка: ${(response.status, response.statusText)}`)
        );
  }

  addMovie(data) {
    return fetch(this._baseUrl + "/movies ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: this._moviesImageUrl + data.image.formats.small.url,
        trailerLink: data.trailerLink,
        thumbnail: this._moviesImageUrl + data.image.formats.thumbnail.url, //тут должно быть ссылка на картинку
        movieId: data.id, // id
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((response) => this._checkResponse(response));
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

  setLike(cardID) {
    return fetch(this._baseUrl + "/movies/" + cardID + "/likes", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  delLike(cardID) {
    return fetch(this._baseUrl + "/movies/" + cardID + "/likes", {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  changeLikeMovieStatus(cardID, isLiked) {
    if (isLiked) {
      return this.setLike(cardID, this._token);
    } else {
      return this.delLike(cardID, this._token);
    }
  }

  delMovie(cardID) {
    return fetch(this._baseUrl + "/movies/" + cardID, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    }).then((response) => this._checkResponse(response));
  }
}

const apiMain = new Api({
  baseUrl: BASE_URL_MAIN,
  moviesImageUrl: BASE_URL_MOVIES,
  token: localStorage.token,
});

export default apiMain;
