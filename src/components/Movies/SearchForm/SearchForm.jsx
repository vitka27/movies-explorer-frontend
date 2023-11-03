import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

export default function SearchForm({ onChengeSearch, onSubmitSearch, setIsShotMovie }) {
  return (
    <div className="wrapper__section wrapper__section_theme_dark search-form">
      <div className=" search-form__container wrapper__section-container">
        <form
          action="#"
          onSubmit={onSubmitSearch}
          className="search-form__form"
        >
          <input
            onChange={onChengeSearch}
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
        <FilterCheckbox title="Короткометражки" setIsShotMovie={setIsShotMovie}/>
      </div>
    </div>
  );
}
