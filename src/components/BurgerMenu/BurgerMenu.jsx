import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function BurgerMenu({ IsOpenBurger }) {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handleBurgerMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    IsOpenBurger(!isOpenBurgerMenu);
  };

  isOpenBurgerMenu ? disableBodyScroll(document) : enableBodyScroll(document)

  return (
    <div className="burger-menu">
      <button
        className={`burger-menu__icon ${
          isOpenBurgerMenu ? "burger-menu__open" : ""
        }`}
        onClick={handleBurgerMenu}
        aria-label="Бургер меню"
      >
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
      </button>
    </div>
  );
}
