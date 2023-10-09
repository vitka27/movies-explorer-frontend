import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const isAuth = false;

  return (
    <div className="wrapper">
      {["/", "/profile", "/movies"].includes(useLocation().pathname) && (
        <Header isAuth={isAuth} />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {["/", "/profile", "/movies"].includes(useLocation().pathname) && <Footer />}{" "}
    </div>
  );
}

export default App;
