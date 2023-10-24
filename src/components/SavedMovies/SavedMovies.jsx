import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { SAVE_MOVIES } from "../../utils/const";

export default function SavedMovies() {
  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList movies={SAVE_MOVIES} />
    </main>
  );
}
