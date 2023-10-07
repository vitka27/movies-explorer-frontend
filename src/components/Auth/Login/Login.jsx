import React from "react";
import logo from "../../../image/logo.svg";

export default function Login() {
  return (
    <section className="login">
      <div className="login_wrap">
        <a href="/" className="login__logo">
          <img src={logo} alt="" className="login__img" />
        </a>
        <h1 className="login__title">Рарды видеть!</h1>
        <form action="" className="login__form">
          <div className="login__input">
            <label htmlFor="" className="login__input-label">
              E-mail
            </label>
            <input type="text" className="login__input-text" />
            <span className="login__input-error"></span>
          </div>
          <div className="login__input">
            <label htmlFor="" className="login__input-label">
              Пороль
            </label>
            <input type="text" className="login__input-text" />
            <span className="login__input-error"></span>
          </div>
          <button type="submit" className="login__button">
            Войти
          </button>
          <div className="login__register">
            <p className="login__register-text">Ещё не зарегистрированы?</p>
            <a href="/" className="login__register-link">
              Регистрация
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
