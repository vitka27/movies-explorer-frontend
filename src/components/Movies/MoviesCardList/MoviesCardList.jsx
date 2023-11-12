import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import More from "../More/More";
import MoviesCard from "../MoviesCard/MoviesCard";
import { SCREEN_SETTINGS } from "../../../utils/const";

export default function MoviesCardList({
  movies,
  moviesSavedList,
  deletedMovie,
  addMovieUserList,
}) {
  const isSavedMoviesLocation = "/saved-movies" === useLocation().pathname;
  const [endCountCardList, setEndCountCardList] = useState("");

  const isEmptyMovieList = movies.length === 0 ? true : false;

  const moviesListRender = isSavedMoviesLocation
    ? movies
    : movies.slice(0, endCountCardList);

  function handleClickMore() {
    setEndCountCardList(endCountCardList + countMovies().stepDisplayMovie);
  }

  function countMovies() {
    const counter = {
      initialQuantityMovies:
        SCREEN_SETTINGS.default.cards.initialQuantityMovies,
      stepDisplayMovie: SCREEN_SETTINGS.default.cards.stepDisplayMovie,
    };
    if (window.innerWidth < SCREEN_SETTINGS.desktop.width) {
      counter.initialQuantityMovies =
        SCREEN_SETTINGS.desktop.cards.initialQuantityMovies;
      counter.stepDisplayMovie = SCREEN_SETTINGS.desktop.cards.stepDisplayMovie;
    }
    if (window.innerWidth < SCREEN_SETTINGS.tablet.width) {
      counter.initialQuantityMovies =
        SCREEN_SETTINGS.tablet.cards.initialQuantityMovies;
      counter.stepDisplayMovie = SCREEN_SETTINGS.tablet.cards.stepDisplayMovie;
    }
    if (window.innerWidth < SCREEN_SETTINGS.mobile.width) {
      counter.initialQuantityMovies =
        SCREEN_SETTINGS.mobile.cards.initialQuantityMovies;
      counter.stepDisplayMovie = SCREEN_SETTINGS.mobile.cards.stepDisplayMovie;
    }
    return counter;
  }

  useEffect(() => {
    if (!isSavedMoviesLocation) {
      function showResize() {
        if (window.innerWidth >= SCREEN_SETTINGS.default.width) {
          setEndCountCardList(countMovies().initialQuantityMovies);
        }
        if (window.innerWidth < SCREEN_SETTINGS.desktop.width) {
          setEndCountCardList(countMovies().initialQuantityMovies);
        }
        if (window.innerWidth < SCREEN_SETTINGS.tablet.width) {
          setEndCountCardList(countMovies().initialQuantityMovies);
        }
        if (window.innerWidth < SCREEN_SETTINGS.mobile.width) {
          setEndCountCardList(countMovies().initialQuantityMovies);
        }
      }
      setEndCountCardList(countMovies().initialQuantityMovies);
      window.addEventListener("resize", showResize, {
        capture: true,
        passive: true,
      });
      return () => window.removeEventListener("resize", showResize);
    }
  }, [isSavedMoviesLocation]);

  return (
    <>
      {isEmptyMovieList ? (
        <span className="wrapper__notification">Ничего не найдено.</span>
      ) : (
        <div className="wrapper__section wrapper__section_theme_dark movies-card-list">
          <div className="wrapper__section-container movies-card-list__container">
            {moviesListRender.map((movie) => (
              <MoviesCard
                key={isSavedMoviesLocation ? movie._id : movie.id}
                movie={movie}
                deletedMovie={deletedMovie}
                addMovieUserList={addMovieUserList}
                moviesSavedList={moviesSavedList}
              />
            ))}
          </div>
          {isSavedMoviesLocation ? (
            ""
          ) : endCountCardList >= movies.length ? (
            ""
          ) : (
            <More handleClickMore={handleClickMore} />
          )}
        </div>
      )}
    </>
  );
}
