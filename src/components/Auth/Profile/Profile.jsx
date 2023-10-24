import React from "react";

export default function Profile() {
  return (
    <div className="wrapper__section wrapper__section_theme_dark profile">
      <form className="wrapper__section-container  profile__form" noValidate="" action="#">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <fieldset className="profile__inputs">
          <div className="profile__input">
            <label htmlFor="userName" className="profile__input-name" aria-label="Имя">
              Имя
              <input
                type="text"
                className="profile__input-text"
                id="userName"
                // value={""}
                placeholder="Виталий"
                aria-label="Имя"
                required
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__input">
            <label htmlFor="userEmail" className="profile__input-name" aria-label="E-mail">
              E-mail
              <input
                type="text"
                className="profile__input-text"
                id="userEmail"
                // value={""}
                placeholder="pochta@yandex.ru"
                aria-label="E-mail"
                required
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__buttons">
            <button className="profile__button" type="button" aria-label="Редактировать" >
              Редактировать
            </button>
            <button
              className="profile__button profile__button_type_exit"
              type="button"
              aria-label="Выйти из аккаунта"
            >
              Выйти из аккаунта
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
