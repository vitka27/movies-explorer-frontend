import React from "react";
import { Link } from "react-router-dom";

export default function NavigationAuthMenu({ isAuth }) {
  return isAuth ? (
    <Link to="/profile" className="navigation-auth-menu__profile-link">
      Акканут
      <span className="navigation-auth-menu__profile-img" />
    </Link>
  ) : (
    <ul className="navigation-auth-menu">
      <li className="navigation-auth-menu__item">
        <Link
          to="/signup"
          className="navigation-auth-menu__link"
          aria-label="Регистрация"
        >
          Регистрация
        </Link>
      </li>
      <li className="navigation-auth-menu__item">
        <Link
          to="/signin"
          className="navigation-auth-menu__link"
          aria-label="Войти"
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}
