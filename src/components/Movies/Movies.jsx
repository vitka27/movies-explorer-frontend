import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import useSearch from "../../hooks/useSearch";

export default function Movies({ dataAllMovies, handleAddMovie }) {
  const {
    filterMovies,
    moviesList,
    setSearchMovie,
    searchMovie,
    setIsShotMovie,
    isShotMovie,
  } = useSearch();

  const onSubmitSearch = (event) => {
    event.preventDefault();
    filterMovies(dataAllMovies);
    localStorage.setItem("searchMovie", searchMovie);
    localStorage.setItem("isShotMovie", isShotMovie);
    localStorage.setItem("movies", JSON.stringify(dataAllMovies));
  };

  return (
    <main className="wrapper__main">
      <SearchForm
        setSearchMovie={setSearchMovie}
        onSubmitSearch={onSubmitSearch}
        setIsShotMovie={setIsShotMovie}
      />
      <MoviesCardList movies={moviesList} handleAddMovie={handleAddMovie} />
    </main>
  );
}
