import React from "react";
import logo from "../../image/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <img src={logo} alt="" className="header__logo" />
        <h1 className="header__menu">
          <h1 className="header__menu-item">Фильмы</h1>
          <h1 className="header__menu-item">Сохранённые фильмы</h1>
        </h1>
      </div>
      <div className="header__auth">
        <h1 className="header__auth-item">Регистрация</h1>
        <h1 className="header__auth-item">Войти</h1>
      </div>
    </header>
  );
}
