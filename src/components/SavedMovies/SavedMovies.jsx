import React, { useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function SavedMovies({ moviesSavedList, deletedMovie }) {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <main className="wrapper__main">
      <SearchForm
        moviesSavedList={moviesSavedList}
        setMoviesList={setMoviesList}
      />
      <MoviesCardList movies={moviesList} deletedMovie={deletedMovie} />
    </main>
  );
}
