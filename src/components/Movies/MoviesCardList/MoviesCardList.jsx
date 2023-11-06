import React from "react";
import { useLocation } from "react-router-dom";
import More from "../More/More";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, handleDeleteMovie, handleAddMovie }) {
  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;

  const actMore = movies.length >= 16;
  return (
    <div className="wrapper__section wrapper__section_theme_dark movies-card-list">
      <div className="wrapper__section-container movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard
            key={isSavedMoviesLocation ? movie._id : movie.id}
            movie={movie}
            handleDeleteMovie={handleDeleteMovie}
            handleAddMovie={handleAddMovie}
          />
        ))}
      </div>
      {actMore ? <More /> : ""}
    </div>
  );
}
