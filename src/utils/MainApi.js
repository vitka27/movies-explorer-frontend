import { BASE_URL_MAIN, BASE_URL_MOVIES } from "./const";

class Api {
  constructor(parameter) {
    this._baseUrl = parameter.baseUrl;
    this._moviesImageUrl = parameter.moviesImageUrl;
  }

  _checkResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(
          console.log(`Ошибка MainApi: ${(response.status, response.statusText)}`)
        );
  }

  addMovie(data, token) {
    return fetch(this._baseUrl + "/movies ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: this._moviesImageUrl + data.image.formats.thumbnail.url,
        trailerLink: data.trailerLink,
        thumbnail: this._moviesImageUrl + data.image.formats.thumbnail.url, //тут должно быть ссылка на картинку
        movieId: data.id, // id
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((response) => this._checkResponse(response));
  }

  getMovies(token) {
    return fetch(this._baseUrl + "/movies", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  getUser(token) {
    return fetch(this._baseUrl + "/users/me ", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  setUserData(data, token) {
    return fetch(this._baseUrl + "/users/me ", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((response) => this._checkResponse(response));
  }

  // setLike(cardID, token) {
  //   return fetch(this._baseUrl + "/movies/" + cardID + "/likes", {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   }).then((response) => this._checkResponse(response));
  // }

  // delLike(cardID, token) {
  //   return fetch(this._baseUrl + "/movies/" + cardID + "/likes", {
  //     method: "DELETE",
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   }).then((response) => this._checkResponse(response));
  // }

  // changeLikeMovieStatus(cardID, isLiked, token) {
  //   if (isLiked) {
  //     return this.setLike(cardID, token);
  //   } else {
  //     return this.delLike(cardID, token);
  //   }
  // }

  delMovie(cardID, token) {
    return fetch(this._baseUrl + "/movies/" + cardID, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => this._checkResponse(response));
  }
}

const apiMain = new Api({
  baseUrl: BASE_URL_MAIN,
  moviesImageUrl: BASE_URL_MOVIES,
});

export default apiMain;
