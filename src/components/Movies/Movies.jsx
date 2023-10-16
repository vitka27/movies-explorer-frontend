import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { MOVIES } from "../../utils/const.js";

export default function Movies() {
  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList movies={MOVIES} />
    </main>
  );
}
