import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie }) {
  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;

  const [isLike, setIsLike] = useState(false);
  function handleClick() {
    setIsLike(!isLike);
  }
  return (
    <article className="movies-card">
      <img src={movie.img} alt={movie.title} className="movies-card__img" />
      <h2 className="movies-card__title">{movie.title}</h2>
      <button
        type="button"
        aria-label="Мне нравится"
        className={
          isSavedMoviesLocation
            ? "movies-card__action movies-card__action_delete"
            : isLike
            ? "movies-card__action movies-card__action_like_active"
            : "movies-card__action movies-card__action_like_disactive"
        }
        onClick={handleClick}
      ></button>
      <p className="movies-card__time">{movie.time}</p>
    </article>
  );
}
