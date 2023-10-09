import React from "react";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import NavigationAuthMenu from "./NavigationAuthMenu/NavigationAuthMenu";

export default function Navigation({ isAuth }) {
  return isAuth ? (
    <>
      <NavigationMenu />
      <NavigationAuthMenu isAuth={isAuth} />
    </>
  ) : (
    <NavigationAuthMenu isAuth={isAuth} />
  );
}
