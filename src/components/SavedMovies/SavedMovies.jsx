import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <main className="wrapper__main">
      <SearchForm />
      {/* <MoviesCardList movies={SAVE_MOVIES} /> */}
    </main>
  );
}
