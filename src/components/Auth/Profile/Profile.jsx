import { React, useContext, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function Profile({ onUpdateDataUser, handleSignOut }) {
  const userData = useContext(CurrentUserContext);

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateDataUser({ name, email });
  }

  return (
    <div className="wrapper__section wrapper__section_theme_dark profile">
      <form
        noValidate
        action="#"
        className="wrapper__section-container  profile__form"
        onSubmit={handleSubmit}
      >
        <h3 className="profile__title">Привет, Виталий!</h3>
        <fieldset className="profile__inputs">
          <div className="profile__input">
            <label
              htmlFor="userName"
              className="profile__input-name"
              aria-label="Имя"
            >
              Имя
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="profile__input-text"
                id="userName"
                value={name || ""}
                aria-label="Имя"
                required
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__input">
            <label
              htmlFor="userEmail"
              className="profile__input-name"
              aria-label="E-mail"
            >
              E-mail
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="profile__input-text"
                id="userEmail"
                value={email || ""}
                aria-label="E-mail"
                required
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__buttons">
            <button
              className="profile__button"
              type="submit"
              aria-label="Редактировать"
            >
              Редактировать
            </button>
            <button
              onClick={handleSignOut}
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
