import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from '../Movies/Preloader/Preloader'

export default function SavedMovies() {
  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </main>
  );
}
