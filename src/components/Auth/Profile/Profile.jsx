import { React, useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import useValidation from "../../../hooks/useValidation";

export default function Profile({ onUpdateDataUser, handleSignOut }) {
  const userData = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValidInputs,
    isValidForm,
    handleChange,
    isEmpty,
    onBlur,
    isDirty,
    reset,
  } = useValidation();
  const [isEdit, setIsEdit] = useState(false);
  const [toDisable, setToDisable] = useState(true);

  function toggleEdit(event) {
    event.preventDefault();
    setIsEdit(!isEdit);
    setToDisable(!toDisable);
  }

  function cancelEdit(event) {
    event.preventDefault();
    setIsEdit(!isEdit);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateDataUser(values);
    setIsEdit(!isEdit);
    setToDisable(!toDisable);
  }

  useEffect(() => {
    reset({ name: userData.name, email: userData.email });
  }, [reset, userData]);

  return (
    <div className="wrapper__section wrapper__section_theme_dark profile">
      <form
        noValidate
        action="#"
        className="wrapper__section-container  profile__form"
        onSubmit={handleSubmit}
      >
        <h3 className="profile__title">{`Привет, ${values.name}!`}</h3>
        <fieldset className="profile__inputs">
          <div className="profile__input">
            <label
              htmlFor="name"
              className="profile__input-name"
              aria-label="Имя"
            >
              Имя
              <input
                disabled={toDisable}
                name="name"
                type="text"
                className={
                  isValidInputs.name === undefined || isValidInputs.name
                    ? "profile__input-text"
                    : "profile__input-text input__text_red"
                }
                id="name"
                value={values.name || ""}
                onChange={handleChange}
                required=""
                minLength={2}
                maxLength={30}
                aria-label="Имя"
              />
            </label>
            <span className="profile__input-error">{errors.name}</span>
          </div>
          <div className="profile__input">
            <label
              htmlFor="email"
              className="profile__input-name"
              aria-label="E-mail"
            >
              E-mail
              <input
                disabled={toDisable}
                name="email"
                type="email"
                id="email"
                className={
                  isValidInputs.email === undefined || isValidInputs.email
                    ? "profile__input-text"
                    : "profile__input-text input__text_red"
                }
                value={values.email || ""}
                onChange={handleChange}
                required=""
                maxLength={30}
                minLength={2}
                aria-label="E-mail"
              />
            </label>
            <span className="profile__input-error">{errors.email}</span>
          </div>

          <div className="profile__buttons">
            {isEdit ? (
              <>
                <button
                  className="profile__button"
                  type="submit"
                  aria-label="Сохранить"
                >
                  Сохранить
                </button>
                <button
                  onClick={cancelEdit}
                  className="profile__button profile__button_type_exit"
                  type="button"
                  aria-label="Выйти из аккаунта"
                >
                  Отменить
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleEdit}
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
              </>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

// !кнопки в компонент
