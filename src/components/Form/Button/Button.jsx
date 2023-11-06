import React from "react";

export default function Button({ buttonName, isValidForm }) {
  return (
    <>
      <button  type="submit" disabled={!isValidForm} className={isValidForm ? "button" : "button button_disabled"} aria-label="кнопка">
        {buttonName}
      </button>
    </>
  );
}
