import React, { useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

export default function Movies({ addMovieUserList, deletedMovie, moviesSavedList, getAllMovies }) {
  const [moviesList, setMoviesList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  return (
    <main className="wrapper__main">
      <SearchForm setMoviesList={setMoviesList} getAllMovies={getAllMovies} setIsFirstRender={setIsFirstRender} />
      <MoviesCardList movies={moviesList} addMovieUserList={addMovieUserList} deletedMovie={deletedMovie} moviesSavedList={moviesSavedList} isFirstRender={isFirstRender} />
    </main>
  );
}
