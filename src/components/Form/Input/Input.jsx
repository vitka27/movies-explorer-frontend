import React from "react";

export default function Input({ inputName }) {
  return (
    <div className="input">
      <label htmlFor="" className="input__label">
        {inputName}
      </label>
      <input type="text" className="input__text" aria-label="Поле для ввода информации"/>
      <span className="input__error"></span>
    </div>
  );
}
