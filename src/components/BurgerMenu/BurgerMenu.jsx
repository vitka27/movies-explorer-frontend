import React, { useState } from "react";
import NavigationMenu from "../Navigation/NavigationMenu/NavigationMenu";

export default function BurgerMenu({ IsOpenBurger }) {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handleBurgerMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    IsOpenBurger(!isOpenBurgerMenu);
  };

  return (
    <div className="burger-menu">
      <button
        className={`burger-menu__icon ${
          isOpenBurgerMenu ? "burger-menu__open" : ""
        }`}
        onClick={handleBurgerMenu}
        aria-label="<Бургер меню>"
      >
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
        <span className="burger-menu__icon-line" aria-hidden="true"></span>
      </button>
      {/* {isOpenBurgerMenu && (
        <ul className="burger-menu__list">
          <NavigationMenu
        </ul>
      )} */}
    </div>
  );
}
