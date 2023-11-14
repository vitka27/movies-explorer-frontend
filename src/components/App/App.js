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
import { NotificationContext } from "../../contexts/NotificationContext";

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
  const token = localStorage.token;

  const [isAuthorezed, setIsAuthorezed] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesSavedList, setMoviesSavedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* get data card, user-prof
  useEffect(() => {
    if (isAuthorezed) {
      Promise.all([apiMain.getUser(token), apiMain.getMovies(token)])
        .then(([userData, dataSaveMovies]) => {
          setCurrentUser(userData);
          setMoviesSavedList(dataSaveMovies);
          setIsAuthorezed(true);
          setIsLoading(true);
        })
        .catch((error) => {
          console.error(
            `Ошибка: apiMain.getUser(), apiMain.getMovies() ${error}`
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [isAuthorezed, token]);

  function getAllMovies() {
    return getMovies()
      .then((response) => {
        setIsLoading(true);
        setIsError(false);
        return response;
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при получении всех фильмов: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function updateDataUser(userData) {
    apiMain
      .setUserData(userData, token)
      .then((response) => {
        setIsLoading(true);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при обновлении профиля пользователя: ${error}`);
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
        setIsError(false);
        loginUser({ email: data.email, password: data.password });
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при регистрации пользователя: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function loginUser(data) {
    authorize(data)
      .then(({ token }) => {
        setIsLoading(true);
        setIsError(false);
        token && localStorage.setItem("token", token);
        checkToken();
        navigate("/movies", { replace: true });
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при авторизации пользователя: ${error}`);
        logoutUser();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function checkToken() {
    if (token) {
      apiCheckToken(token)
        .then((response) => {
          setIsAuthorezed(true);
        })
        .catch((error) => {
          logoutUser();
          console.error(`Ошибка при проверке токена: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
  useEffect(() => {
    checkToken();
  });
  function logoutUser() {
    localStorage.clear();
    setIsAuthorezed(false);
    navigate("/");
  }

  //* add and delete movie
  function addMovieUserList(movie) {
    apiMain
      .addMovie(movie, token)
      .then((newMovie) => {
        setMoviesSavedList([...moviesSavedList, newMovie]);
      })
      .catch((error) =>
        console.error(
          `Ошибка при добавлении фильма в список пользователя: ${error}`
        )
      );
  }

  function deletedMovie(movie) {
    apiMain
      .delMovie(movie._id, token)
      .then(() => {
        setMoviesSavedList(
          moviesSavedList.filter((item) => item._id !== movie._id)
        );
      })
      .catch((error) =>
        console.error(
          `Ошибка при удалении фильма из списка пользователя: ${error}`
        )
      );
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <NotificationContext.Provider value={{isError, isLoading}}>
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
                    isAuthorezed={isAuthorezed}
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
    </NotificationContext.Provider>
  );
}

export default App;
