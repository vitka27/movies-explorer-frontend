import React from "react";

export default function Profile() {
  return (
    <section className="profile">
      <form className="profile__form" noValidate="" action="#">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <fieldset className="profile__inputs">
          <div className="profile__input">
            <label htmlFor="" className="profile__input-name">
              Имя
              <input
                type="text"
                className="profile__input-text"
                id=""
                // value={""}
                aria-label="Имя"
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__input">
            <label htmlFor="" className="profile__input-name">
              E-mail
              <input
                type="text"
                className="profile__input-text"
                id=""
                // value={""}
                aria-label="E-mail"
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
    </section>
  );
}
