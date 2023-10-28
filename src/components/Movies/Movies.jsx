import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import getMovies from "../../utils/MoviesApi";

export default function Movies() {
  const [movies, setMovies] = React.useState([]);

  getMovies().then((movies) => {
    setMovies(movies);
  });

  return (
    <main className="wrapper__main">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
}
