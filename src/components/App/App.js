import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { visabilityPathHeaderFooter } from "../../utils/const";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { authorize, apiCheckToken } from "../../utils/Auth";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const localToken = localStorage.token;

  const [isAuthorezed, setIsAuthorezed] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //*login
  function hadleSubmitLogin(data) {
    authorize(data)
      .then(({ token }) => {
        token && localStorage.setItem("token", token);
        checkToken();
        setIsAuthorezed(true);
      })
      .catch((error) => {
        console.error(`Ошибка: ${error}`);
        // setIsSuccessfully(false);
        // setisMassagePopupOpen(true);
      });
  }
  //*checkToken
  function checkToken() {
    if (localToken) {
      apiCheckToken(localToken)
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
  useEffect(checkToken, [localToken]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        {visabilityPathHeaderFooter.includes(useLocation().pathname) && (
          <Header isAuthorezed={isAuthorezed} />
        )}
        <Routes>
          <Route element={<ProtectedRoute isAuthorezed={isAuthorezed} />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
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
        )}{" "}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
