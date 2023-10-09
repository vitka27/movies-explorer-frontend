import React from "react";
import { Link } from "react-router-dom";

import imgProfile from "../../../images/profile.svg";

export default function NavigationAuthMenu({ isAuth }) {
  return isAuth ? (
    <ul className="navigation-auth-menu">
      <li className="navigation-auth-menu__profile">
        Акканут
        <button className="navigatio-auth-menu__link">
          <img src={imgProfile} alt="" className="navigation-auth-menu__img" />
        </button>
      </li>
    </ul>
  ) : (
    <ul className="navigation-auth-menu">
      <li className="navigation-auth-menu__item">
        <Link to="/signup" className="navigation-auth-menu__link">
          Регистрация
        </Link>
      </li>
      <li className="navigation-auth-menu__item">
        <Link to="/signin"  className="navigation-auth-menu__link">
          Войти
        </Link>
      </li>
    </ul>
  );
}
