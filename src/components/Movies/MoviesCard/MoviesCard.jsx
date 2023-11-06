import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL_MOVIES } from "../../../utils/const";
import timeConvert from "../../../utils/timeConvert";

export default function MoviesCard({ movie, handleDeleteMovie, handleAddMovie  }) {

  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;
  const [isLike, setIsLike] = useState(false);

  function handleClick(event) {
    isSavedMoviesLocation ? handleDeleteMovie(movie) : handleAddMovie(movie);
    setIsLike(!isLike);
  }

  return (
    <article className="movies-card">
      <img
        src={isSavedMoviesLocation? movie.image :BASE_URL_MOVIES + movie.image.url}
        alt={movie.nameRU}
        className="movies-card__img"
      />
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      <button
        type="button"
        aria-label="Мне нравится"
        className={
          isSavedMoviesLocation
            ? "movies-card__action movies-card__action_like_active movies-card__action_delete"
            : isLike
            ? "movies-card__action movies-card__action_like_active"
            : "movies-card__action movies-card__action_like_disactive"
        }
        onClick={handleClick}
      ></button>
      <p className="movies-card__time">{timeConvert(movie.duration)}</p>
    </article>
  );
}
