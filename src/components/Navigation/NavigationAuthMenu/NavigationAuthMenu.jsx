import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavigationAuthMenu({ isAuth }) {
  const location = useLocation().pathname;

  return isAuth ? (
    <div className="navigation-auth-menu">
      <Link to="/profile" className="navigation-auth-menu__profile-link">
        Акканут
        <span
          className={
            location === "/"
              ? "navigation-auth-menu__profile-img"
              : "navigation-auth-menu__profile-img navigation-auth-menu__profile-img_bg-color-blue"
          }
        />
      </Link>
    </div>
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
