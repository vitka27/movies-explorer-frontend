import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

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
  const [dataAllMovies, setDataAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* get data card, user-prof
  useEffect(() => {
    Promise.all([apiMain.getUser(), apiMain.getMovies(), getMovies()])
      .then(([userData, dataSaveMovies, dataAllMovies]) => {
        setCurrentUser(userData);
        setMoviesSavedList(dataSaveMovies);
        setDataAllMovies(dataAllMovies);
        setIsAuthorezed(true);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
        setIsLoading(false);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [localStorageToken]);

  function updateDataUser(userData) {
    apiMain.setUserData(userData);
  }

  //*register, login, checkToken and logout
  function registerUser(data) {
    register(data)
      .then((response) => {
        if (response) {
          loginUser({ email: data.email, password: data.password });
        }
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
      });
  }

  function loginUser(data) {
    authorize(data)
      .then(({ token }) => {
        token && localStorage.setItem("token", token);
        checkToken();
        navigate("/movies", { replace: true });
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
        // setIsSuccessfully(false);
        // setisMassagePopupOpen(true);
      });
  }

  function checkToken() {
    if (localStorageToken) {
      apiCheckToken(localStorageToken)
        .then((response) => {
          if (response) {
            setIsAuthorezed(true);
          }
        })
        .catch((error) => console.error(`Ошибка: ${error}`));
    }
  }
  useEffect(checkToken, [localStorageToken]);

  function logoutUser() {
    localStorage.clear();
    navigate("/signin");
    setIsAuthorezed(false);
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
                  dataAllMovies={dataAllMovies}
                  addMovieUserList={addMovieUserList}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                deletedMovie={deletedMovie}
                  moviesSavedList={moviesSavedList}
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

          <Route path="/" element={<Main />} />
          <Route
            path="/signin"
            element={<Login loginUser={loginUser} />}
          />
          <Route
            path="/signup"
            element={<Register registerUser={registerUser} />}
          />
        </Routes>
        {visabilityPathHeaderFooter.includes(location) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
