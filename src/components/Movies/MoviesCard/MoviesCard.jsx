import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL_MOVIES } from "../../../utils/const";
import timeConvert from "../../../utils/timeConvert";

export default function MoviesCard({
  movie,
  deletedMovie,
  addMovieUserList,
  moviesSavedList,
}) {
  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (
      !isSavedMoviesLocation &&
      moviesSavedList.some((item) => item.movieId === movie.id)
    ) {
      setIsLike(true);
    }
  }, [isSavedMoviesLocation, movie.id, moviesSavedList]);

  function toggleAddMovie() {
    const movieInSaveList = moviesSavedList.find((element) => {
      return element.movieId === movie.id;
    });
    if (movieInSaveList) {
      deletedMovie(movieInSaveList);
      setIsLike(false);
    } else {
      setIsLike(true);
      addMovieUserList(movie);
    }
  }

  function handleRemoveMovie() {
    deletedMovie(movie);
  }

  return (
    <article className="movies-card">
      <a
        href={movie.trailerLink}
        className="movies-card__img-link"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={
            isSavedMoviesLocation
              ? movie.image
              : BASE_URL_MOVIES + movie.image.url
          }
          alt={movie.nameRU}
          className="movies-card__img"
        />
      </a>
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      {isSavedMoviesLocation ? (
        <button
          type="button"
          aria-label="Удалить фильм"
          className={
            "movies-card__action movies-card__action_like_active movies-card__action_delete"
          }
          onClick={handleRemoveMovie}
        ></button>
      ) : (
        <button
          type="button"
          aria-label="Добавить фильм в мой список"
          className={
            isLike
              ? "movies-card__action movies-card__action_like_active"
              : "movies-card__action movies-card__action_like_disactive"
          }
          onClick={toggleAddMovie}
        ></button>
      )}
      <p className="movies-card__time">{timeConvert(movie.duration)}</p>
    </article>
  );
}
