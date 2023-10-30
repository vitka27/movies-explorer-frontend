import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function SavedMovies({ moviesSavedList }) {
  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList movies={moviesSavedList} />
    </main>
  );
}
