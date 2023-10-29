import React from "react";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import NavigationAuthMenu from "./NavigationAuthMenu/NavigationAuthMenu";

export default function Navigation({ isAuthorezed, isOpenBurgerMenu }) {
  return (
    <nav
      className={`navigation
    ${!isAuthorezed ? "navigation_justify_end" : ""}
    ${isOpenBurgerMenu ? "navigation__block_active" : ""}`}
    >
      {isAuthorezed ? (
        <>
          <NavigationMenu />
          <NavigationAuthMenu isAuth={isAuthorezed} />
        </>
      ) : (
        <NavigationAuthMenu isAuth={isAuthorezed} />
      )}
    </nav>
  );
}
