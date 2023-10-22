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
    <figure className="movies-card">
      <img src={movie.img} alt={movie.title} className="movies-card__img" />
      <figcaption className="movies-card__title">{movie.title}</figcaption>
      <button
        type="button"
        aria-label="Мне нравится"
        className={
          isSavedMoviesLocation
            ? "movies-card__action movies-card__delete"
            : isLike
            ? "movies-card__action movies-card__like__active"
            : "movies-card__action movies-card__like__disactive"
        }
        onClick={handleClick}
      ></button>
      <span className="movies-card__time">{movie.time}</span>
    </figure>
  );
}
