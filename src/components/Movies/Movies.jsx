import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

export default function Movies({moviesList}) {

  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList movies={moviesList} />
    </main>
  );
}
