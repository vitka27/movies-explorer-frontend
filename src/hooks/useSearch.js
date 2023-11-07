import { useState, useCallback } from "react";

export default function useSearch() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isShotMovie, setIsShotMovie] = useState(false);

  const filterShotMovies = (resultMovies) =>
    resultMovies.filter((movie) => movie.duration <= 40);

  const filterMovies = useCallback((movies) => {
    const resultMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase())
    );
    if (!searchMovie) {
      setMoviesList([]);
    } else {
      isShotMovie
        ? setMoviesList(filterShotMovies(resultMovies))
        : setMoviesList(resultMovies);
    }
  }, [isShotMovie, searchMovie]);

  const resetMovies = useCallback((data = []) => {
    setMoviesList(data);
  }, []);

  return {
    filterMovies,
    moviesList,
    setSearchMovie,
    searchMovie,
    setIsShotMovie,
    isShotMovie,
    resetMovies
  };
}
