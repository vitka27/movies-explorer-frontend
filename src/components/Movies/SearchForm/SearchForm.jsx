import React, { useEffect } from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import useValidation from "../../../hooks/useValidation";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  setSearchMovie,
  onSubmitSearch,
  setIsShotMovie,
}) {
  function handleChangForm(event) {
    onSubmitSearch(event);
    setSearchMovie(values.search);
  }
  const location = useLocation();
  const { values, errors, handleChange, reset } = useValidation();

  useEffect(() => {
    if (location === "saved-movies") {
      reset({ search: "" });
    } else {
      reset({ search: localStorage.searchMovie });
    }
  }, [location, reset]);

  return (
    <div className="wrapper__section wrapper__section_theme_dark search-form">
      <div className=" search-form__container wrapper__section-container">
        <form
          action="#"
          onSubmit={handleChangForm}
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
        />
      </div>
    </div>
  );
}
