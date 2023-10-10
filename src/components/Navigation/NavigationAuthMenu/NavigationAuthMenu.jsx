import React from "react";
import { Link } from "react-router-dom";

import imgUser from "../../../images/profile.svg";

export default function NavigationAuthMenu({ isAuth }) {
  return isAuth ? (
    <nav>
      <ul className="navigation-auth-menu">
        <li className="navigation-auth-menu__profile">
          Акканут
          <button className="navigatio-auth-menu__link" aria-label="Акканут">
            <img src={imgUser} alt="" className="navigation-auth-menu__img" />
          </button>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className="navigation-auth-menu">
        <li className="navigation-auth-menu__item">
          <Link to="/signup" className="navigation-auth-menu__link" aria-label="Регистрация">
            Регистрация
          </Link>
        </li>
        <li className="navigation-auth-menu__item">
          <Link to="/signin"  className="navigation-auth-menu__link" aria-label="Войти">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}
