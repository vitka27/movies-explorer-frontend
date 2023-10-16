import React from "react";

export default function Input({ inputName, inputID, placeholder }) {
  return (
    <div className="input">
      <label htmlFor={inputID} className="input__label">
        {inputName}
      </label>
      <input
        id={inputID}
        type="text"
        className="input__text"
        aria-label="Поле для ввода информации"
        placeholder={placeholder}
      />
      <span className="input__error"></span>
    </div>
  );
}
