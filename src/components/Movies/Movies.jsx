import React, { useMemo } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import useSearch from "../../hooks/useSearch";
import getMovies from "../../utils/MoviesApi";

export default function Movies() {
  const { filterMovies, moviesList, setSearchMovie, setIsShotMovie } =
    useSearch();

  const onChengeSearch = (event) => setSearchMovie(event.target.value);
  const onSubmitSearch = (event) => {
    event.preventDefault();
    getMoviesData();
  };

  const getMoviesData = () => {
    getMovies()
      .then((data) => {
        filterMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="wrapper__main">
      <SearchForm
        onChengeSearch={onChengeSearch}
        onSubmitSearch={onSubmitSearch}
        setIsShotMovie={setIsShotMovie}
      />
      <MoviesCardList movies={moviesList} />
    </main>
  );
}
