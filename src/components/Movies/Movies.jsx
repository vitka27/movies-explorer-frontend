import React, { useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import getMovies from "../../utils/MoviesApi";

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isShotMovie, setIsShotMovie] = useState(false);

  const onChengeSearch = (event) => setSearchMovie(event.target.value);
  const onSubmitSearch = (event) => {
    console.log('1');
    event.preventDefault();
    filterMovies();
  };

  const filterShotMovies = (movies) =>
    movies.filter((movie) => movie.duration <= 40);

  const filterMovies = () => {
    getMovies()
      .then((movies) => {
        const resultMovies = movies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase())
        );
        return isShotMovie
          ? setMoviesList(filterShotMovies(resultMovies))
          : setMoviesList(resultMovies);
      })
      .catch((error) => console.error(`Ошибка: ${error}`));
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
