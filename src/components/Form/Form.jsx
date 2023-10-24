import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Header/Logo/Logo";
import Button from "../../components/Form/Button/Button";
import ToAction from "../../components/Form/ToAction/ToAction";

export default function Form({
  children,
  title,
  buttonName,
  actionTitle,
  nameButton,
  patch,
}) {
  return (
    <>
      <div className="wrapper__section form">
        <div className="wrapper__section-container form__wrap">
          <div className="form__header-logo">
            <Logo />
          </div>
          <h1 className="form__title">{title}</h1>
          <form action="" className="form__form">
            <div className="form__inputs">{children}</div>
            <div className="form__buttons">
              {useLocation().pathname === "/signup" ? (
                <>
                  <Button buttonName="Зарегистрироваться" />
                  <ToAction
                    actionTitle="Уже зарегистрированы?"
                    nameButton="Войти"
                    patch="/signin"
                  />
                </>
              ) : (
                <>
                  <Button buttonName="Войти" />
                  <ToAction
                    actionTitle="Ещё не зарегистрированы?"
                    nameButton="Регистрация"
                    patch="/signup"
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
