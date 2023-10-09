import { Route, Routes, Link } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import NotFound from "../NotFound/NotFound";

const isAuth = false;

function App() {
  return (
    <div className="wrapper">

      <Header isAuth={isAuth} />
      {/* <Main /> */}
      <Movies />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Profile /> */}
      <Footer />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
