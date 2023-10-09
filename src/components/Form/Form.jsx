import React from "react";
import logo from "../../image/logo.svg";

export default function Form({ children, title }) {
  return (
    <>
      <section className="form">
        <div className="form__wrap">
          <a href="/" className="form__logo">
            <img src={logo} alt="" className="form__img" />
          </a>
          <h1 className="form__title">{title}</h1>
          <form action="" className="form__form">
            {children}
          </form>
        </div>
      </section>
    </>
  );
}
