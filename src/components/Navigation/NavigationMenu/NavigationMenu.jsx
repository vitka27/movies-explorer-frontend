import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationMenu() {
  return (
    <ul className="navigation-menu">
      <li className="navigation-menu__item">
        <NavLink to="/" className="navigation-menu__link">Главная</NavLink>
      </li>
      <li className="navigation-menu__item">
        <NavLink to="/movies" className="navigation-menu__link">Фильмы</NavLink>
      </li>
      <li className="navigation-menu__item">
        <NavLink to="/saved-movies" className="navigation-menu__link">Сохранённые фильмы</NavLink>
      </li>
    </ul>
  );
}
