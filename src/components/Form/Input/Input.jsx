import React from "react";

export default function Input({
  inputName,
  error,
  isEmpty,
  isDirty,
  isValidInputs,
  ...props
}) {
  return (
    <div className="input">
      <label htmlFor={props.name} className="input__label">
        {inputName}
      </label>
      <input className={isValidInputs[props.name] ? "input__text" : "input__text input__text_red"} id={props.name} {...props} />
      <span className="input__error input__error_red">
        {isDirty && isEmpty[props.name] ? "Поле не может быть пустым" : error}
      </span>
    </div>
  );
}
