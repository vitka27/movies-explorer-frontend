import React from "react";
import logo from "../../image/logo.svg";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export default function Header({ isAuth }) {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <header className="header">
      <a href="/" className="header__link">
        <img src={logo} alt="" className="header__logo" />
      </a>
      <div
        className={`header__block
        ${!isAuth ? "header__block_justify_end" : ""}
        ${isOpenBurgerMenu ? "header__block_active" : ""}
        `}
      >
        <Navigation isAuth={isAuth} />
      </div>
      {isAuth ? <BurgerMenu IsOpenBurger={setIsOpenBurgerMenu}/> : ""}
    </header>
  );
}
