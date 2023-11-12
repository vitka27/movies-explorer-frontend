import React, { useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

export default function Movies({ addMovieUserList, deletedMovie, moviesSavedList, getAllMovies }) {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <main className="wrapper__main">
      <SearchForm setMoviesList={setMoviesList} getAllMovies={getAllMovies}/>
      <MoviesCardList movies={moviesList} addMovieUserList={addMovieUserList} deletedMovie={deletedMovie} moviesSavedList={moviesSavedList} />
    </main>
  );
}
