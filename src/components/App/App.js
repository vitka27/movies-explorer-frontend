import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { visabilityPathHeaderFooter } from "../../utils/const";
import apiMain from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import { authorize, apiCheckToken } from "../../utils/Auth";

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
import Preloader from "../Movies/Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const localStorageToken = localStorage.token;

  const [isAuthorezed, setIsAuthorezed] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [moviesSavedList, setMoviesSavedList] = useState([]);

  //*login, register and logout
  function hadleSubmitLogin(data) {
    authorize(data)
      .then(({ token }) => {
        token && localStorage.setItem("token", token);
        // checkToken();
        setIsAuthorezed(true);
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
        // setIsSuccessfully(false);
        // setisMassagePopupOpen(true);
      });
  }
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/signin");
    setIsAuthorezed(false);
  }

  //*checkToken
  function checkToken() {
    if (localStorageToken) {
      apiCheckToken(localStorageToken)
        .then((response) => {
          if (response.email) {
            setIsAuthorezed(true);
          }
        })
        .catch((error) => console.error(`Ошибка: ${error}`))
        .finally(() => navigate("/"));
    }
  }
  // eslint-disable-next-line
  useEffect(checkToken, [localStorageToken]);

  //* init render card, user-prof
  useEffect(() => {
    Promise.all([apiMain.getUser(), getMovies(), apiMain.getMovies()])
      .then(([userData, dataMovies, dataSaveMovies]) => {
        setCurrentUser(userData);
        setMoviesList(dataMovies);
        setMoviesSavedList(dataSaveMovies);
        // setIsLoading(false);
      })
      .catch((error) => console.error(`Ошибка: ${error}`));
  }, [localStorageToken]);

  function updateDataUser(userData) {
    apiMain.setUserData(userData);
  }

  return (
    
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        {visabilityPathHeaderFooter.includes(useLocation().pathname) && (
          <Header isAuthorezed={isAuthorezed} />
        )}
        <Routes>
          <Route element={<ProtectedRoute isAuthorezed={isAuthorezed} />}>
            <Route
              path="/movies"
              element={<Movies moviesList={moviesList} />}
            />
            <Route path="/saved-movies" element={<SavedMovies moviesSavedList={moviesSavedList} />} />
            <Route
              path="/profile"
              element={
                <Profile
                  onUpdateDataUser={updateDataUser}
                  handleSignOut={handleLogout}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/" element={<Main />} />
          <Route
            path="/signin"
            element={<Login hadleSubmitLogin={hadleSubmitLogin} />}
          />
          <Route path="/signup" element={<Register />} />
        </Routes>
        {visabilityPathHeaderFooter.includes(useLocation().pathname) && (
          <Footer />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
