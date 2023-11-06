import React, { useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import useSearch from "../../hooks/useSearch";

export default function SavedMovies({ moviesSavedList }) {
  const { filterMovies, moviesList, setSearchMovie, setIsShotMovie } =
    useSearch();
  const [firstSearch, setFirstSearch] = useState(true);

  const onChengeSearch = (event) => setSearchMovie(event.target.value);

  const onSubmitSearch = (event) => {
    setFirstSearch(!firstSearch);
    event.preventDefault();
    getMoviesData();
  };

  const getMoviesData = () => {
    filterMovies(moviesSavedList);
  };

  return (
    <main className="wrapper__main">
      <SearchForm
        onChengeSearch={onChengeSearch}
        onSubmitSearch={onSubmitSearch}
        setIsShotMovie={setIsShotMovie}
      />
      <MoviesCardList movies={firstSearch ? moviesSavedList : moviesList} />
    </main>
  );
}
