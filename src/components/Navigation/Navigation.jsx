import React from "react";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import NavigationAuthMenu from "./NavigationAuthMenu/NavigationAuthMenu";

export default function Navigation({ isAuth, isOpenBurgerMenu }) {
  return (
    <nav
      className={`navigation
    ${!isAuth ? "navigation__block_justify_end" : ""}
    ${isOpenBurgerMenu ? "navigation__block_active" : ""}`}
    >
      {isAuth ? (
        <>
          <NavigationMenu />
          <NavigationAuthMenu isAuth={isAuth} />
        </>
      ) : (
        <NavigationAuthMenu isAuth={isAuth} />
      )}
    </nav>
  );
}
