import React, { useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

export default function Movies({ dataAllMovies, addMovieUserList }) {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <main className="wrapper__main">
      <SearchForm dataAllMovies={dataAllMovies} setMoviesList={setMoviesList}/>
      <MoviesCardList movies={moviesList} addMovieUserList={addMovieUserList} />
    </main>
  );
}
