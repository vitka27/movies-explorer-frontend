import React from "react";
import Logo from "../Header/Logo/Logo";

export default function Form({ children, title }) {
  return (
    <>
      <section className="wrapper__section form">
        <div className="wrapper__section-container form__wrap">
          <Logo />
          <h1 className="form__title">{title}</h1>
          <form action="" className="form__form">
            {children}
          </form>
        </div>
      </section>
    </>
  );
}
