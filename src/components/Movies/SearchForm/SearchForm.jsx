import React, { useEffect } from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import useValidation from "../../../hooks/useValidation";
import useSearch from "../../../hooks/useSearch";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  dataAllMovies,
  moviesSavedList,
  setMoviesList,
}) {
  const isLocationMovies = useLocation().pathname === "/movies";
  const filmsForProcessing = isLocationMovies ? dataAllMovies : moviesSavedList;
  const { values, errors, handleChange, reset } = useValidation();

  const {
    filterMovies,
    moviesList,
    setSearchMovie,
    searchMovie,
    setIsShotMovie,
    resetMovies,
  } = useSearch();

  const onSubmitSearch = (event) => {
    event.preventDefault();
    filterMovies(filmsForProcessing);
    isLocationMovies &&
      localStorage.setItem("searchMovie", searchMovie) &&
      localStorage.setItem("movies", JSON.stringify(filmsForProcessing));
  };

  useEffect(() => {
    if (isLocationMovies) {
      reset({ search: localStorage.searchMovie });
      setIsShotMovie(localStorage.isShotMovie === "true" ? true : false);
      filterMovies(filmsForProcessing);
    }
  }, [filmsForProcessing, isLocationMovies, reset, setIsShotMovie]);

  useEffect(() => {
    setSearchMovie(values.search);
  }, [setSearchMovie, values.search]);

  useEffect(() => {
    !isLocationMovies && resetMovies(moviesSavedList);
  }, [isLocationMovies, moviesSavedList, resetMovies]);

  useEffect(() => {
    setMoviesList(moviesList);
  }, [moviesList, setMoviesList]);


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
            onChange={handleChange}
            value={values.search || ""}
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
          setIsShotMovie={setIsShotMovie}
          isLocationMovies={isLocationMovies}
        />
      </div>
    </div>
  );
}
