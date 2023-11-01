import React from "react";

export default function Input({
  inputName,
  error,
  isEmpty,
  isDirty,
  ...props
}) {
  return (
    <div className="input">
      <label htmlFor={props.name} className="input__label">
        {inputName}
      </label>
      <input className="input__text" id={props.name} {...props} />
      <span className="input__error">
        {isDirty && isEmpty[props.name] ? "Поле не может быть пустым" : error}
      </span>
    </div>
  );
}
