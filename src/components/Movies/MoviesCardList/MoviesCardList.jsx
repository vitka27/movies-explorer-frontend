import React from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  const actPreloader = movies.length >= 16;
  return (
    <div className="wrapper__section wrapper__section_theme_dark movies-card-list">
      <div className="wrapper__section-container movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
      {actPreloader ? <Preloader /> : ""}
    </div>
  );
}
