import React from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  console.log(movies);
  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;

  const actPreloader = movies.length >= 16;
  return (
    <div className="wrapper__section wrapper__section_theme_dark movies-card-list">
      <div className="wrapper__section-container movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard key={isSavedMoviesLocation? movie._id :movie.id} movie={movie} />
        ))}
      </div>
      {actPreloader ? <Preloader /> : ""}
    </div>
  );
}
