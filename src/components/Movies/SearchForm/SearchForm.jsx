import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";


export default function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form action="" className="search-form__form">
          <input type="text" className="search-form__form-input" placeholder="Фильм" aria-label="Поле поиска "/>
          <button type="submit" className="search-form__form-button" aria-label="Найти">
            Найти
          </button>
        </form>
        <FilterCheckbox title="Короткометражки" />
      </div>
    </section>
  );
}
