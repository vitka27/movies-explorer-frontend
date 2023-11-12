import React, { useEffect, useCallback, useState } from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  moviesSavedList,
  setMoviesList,
  getAllMovies,
}) {
  const isLocationMovies = useLocation().pathname === "/movies";
  const [searchQuery, setSearchQuery] = useState("");
  const [isShot, setIsShot] = useState(false);

  const [dataAllMovies, setDataAllMovies] = useState([]);

  const filters = useCallback(
    (search, movies, isShot, showMoviesList = false) => {

      if (isLocationMovies) {
        localStorage.setItem("search", JSON.stringify(search));
        localStorage.setItem("isShot", JSON.stringify(isShot));
        localStorage.setItem("movies", JSON.stringify(movies));
      }

      const filterShotMovies = (resultMovies) =>
        resultMovies.filter((movie) => movie.duration <= 40);

      const resultSearch = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(search.toLowerCase())
      );

      if (!search) {
        showMoviesList ? setMoviesList(movies) : setMoviesList([]);
      } else {
        isShot
          ? setMoviesList(filterShotMovies(resultSearch))
          : setMoviesList(resultSearch);
      }
    },
    []
  );

  const onSubmitSearch = (event) => {
    event.preventDefault();
    goSearch();
  };

  const goSearch = () => {
    if (isLocationMovies) {
      if (dataAllMovies.length === 0) {
        getAllMovies().then((response) => {
          setDataAllMovies(response);
          filters(searchQuery, response, isShot, false);
        });
      } else {
        filters(searchQuery, dataAllMovies, isShot, false);
      }
    } else {
      filters(searchQuery, moviesSavedList, isShot, true);
    }
  };

  useEffect(() => {
    if (isLocationMovies) {
      if (localStorage.search && localStorage.movies) {
        const search = JSON.parse(localStorage.search);
        const movies = JSON.parse(localStorage.movies);
        const shot = localStorage.isShot === "true" ? true : false;
        setDataAllMovies(movies);
        setSearchQuery(search);
        setIsShot(shot);
        filters(search, movies, shot, false);
      }
    } else {
      filters(searchQuery, moviesSavedList, isShot, true);
    }
  }, [filters, isLocationMovies, isShot, moviesSavedList]);


  return (
    <div className="wrapper__section wrapper__section_theme_dark search-form">
      <div className=" search-form__container wrapper__section-container">
        <form
          action="#"
          onSubmit={onSubmitSearch}
          className="search-form__form"
        >
          <input
            name="search"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            value={searchQuery || ""}
            type="text"
            className="search-form__form-input"
            placeholder="Фильм"
            aria-label="Поле поиска "
          />
          <button
            type="submit"
            className="search-form__form-button"
            aria-label="Найти"
          >
            Найти
          </button>
        </form>
        <FilterCheckbox
          title="Короткометражки"
          setIsShot={setIsShot}
          isLocationMovies={isLocationMovies}
        />
      </div>
    </div>
  );
}
