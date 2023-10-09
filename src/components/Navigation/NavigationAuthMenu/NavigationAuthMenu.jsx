import React from "react";
import imgProfile from "../../../image/profile.svg";

export default function NavigationAuthMenu({ isAuth }) {
  return (
    isAuth ? (
      <ul className="navigation-auth-menu">
        <li className="navigation-auth-menu__profile">
          Акканут
          <button className="navigatio-auth-menu__link">
            <img
              src={imgProfile}
              alt=""
              className="navigation-auth-menu__img"
            />
          </button>
        </li>
      </ul>
    ) : (
      <ul className="navigation-auth-menu">
        <li className="navigation-auth-menu__item">Регистрация</li>
        <li className="navigation-auth-menu__item">Войти</li>
      </ul>
    )
  );
}
