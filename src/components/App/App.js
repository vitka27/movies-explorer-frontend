import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

import { visabilityPathHeaderFooter } from "../../utils/const";
import apiMain from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import { register, authorize, apiCheckToken } from "../../utils/Auth";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const localStorageToken = localStorage.token;

  const [isAuthorezed, setIsAuthorezed] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesSavedList, setMoviesSavedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* get data card, user-prof
  useEffect(() => {
    Promise.all([apiMain.getUser(), apiMain.getMovies()])
      .then(([userData, dataSaveMovies]) => {
        setCurrentUser(userData);
        setMoviesSavedList(dataSaveMovies);
        setIsAuthorezed(true);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function getAllMovies() {
    return getMovies()
      .then((response) => {
        setIsLoading(true);
        return response;
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function updateDataUser(userData) {
    apiMain
      .setUserData(userData)
      .then((response) => {
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //*register, login, checkToken and logout
  function registerUser(data) {
    register(data)
      .then((response) => {
        setIsLoading(true);
        if (response) {
          loginUser({ email: data.email, password: data.password });
        }
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function loginUser(data) {
    authorize(data)
      .then(({ token }) => {
        setIsLoading(true);
        token && localStorage.setItem("token", token);
        checkToken();
        navigate("/movies", { replace: true });
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function checkToken() {
    if (localStorageToken) {
      apiCheckToken(localStorageToken)
        .then((response) => {
          setIsLoading(true);
          if (response) {
            setIsAuthorezed(true);
          }
        })
        .catch((error) => console.error(`Ошибка: ${error}`))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
  useEffect(checkToken, [localStorageToken]);

  function logoutUser() {
    localStorage.clear();
    setIsAuthorezed(false);
    navigate("/signin");
  }

  //* add and delete movie
  function addMovieUserList(movie) {
    apiMain
      .addMovie(movie)
      .then((newMovie) => {
        setMoviesSavedList([...moviesSavedList, newMovie]);
      })
      .catch((error) => console.error(`Ошибка: ${error}`));
  }

  function deletedMovie(movie) {
    apiMain
      .delMovie(movie._id)
      .then(() => {
        setMoviesSavedList(
          moviesSavedList.filter((item) => item._id !== movie._id)
        );
      })
      .catch((error) => console.error(`Ошибка: ${error}`));
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        {visabilityPathHeaderFooter.includes(location) && (
          <Header isAuthorezed={isAuthorezed} />
        )}
        <Routes>
          <Route element={<ProtectedRoute isAuthorezed={isAuthorezed} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  getAllMovies={getAllMovies}
                  moviesSavedList={moviesSavedList}
                  addMovieUserList={addMovieUserList}
                  deletedMovie={deletedMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  moviesSavedList={moviesSavedList}
                  deletedMovie={deletedMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onUpdateDataUser={updateDataUser}
                  logoutUser={logoutUser}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route
            path="/signin"
            element={
              isAuthorezed ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login loginUser={loginUser} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isAuthorezed ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register registerUser={registerUser} />
              )
            }
          />
          <Route path="/" element={<Main />} />
        </Routes>
        {visabilityPathHeaderFooter.includes(location) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
