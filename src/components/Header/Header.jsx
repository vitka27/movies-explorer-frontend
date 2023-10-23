import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Header/Logo/Logo";
import { useState } from "react";

export default function Header({ isAuth }) {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const location = useLocation().pathname;

  return (
    <header className={location === "/" ? 'wrapper__section wrapper__section_theme_blue header' : 'wrapper__section wrapper__section_theme_dark header'}>
      <div className=" header__container wrapper__section-container">
        <Logo />
        <Navigation isAuth={isAuth} isOpenBurgerMenu={isOpenBurgerMenu} />
        {isAuth ? <BurgerMenu IsOpenBurger={setIsOpenBurgerMenu} /> : ""}
      </div>
    </header>
  );
}
