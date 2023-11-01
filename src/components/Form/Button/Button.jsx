import React from "react";

export default function Button({ buttonName, isValidForm }) {
  return (
    <>
      <button  type="submit" className="button" aria-label="кнопка">
        {buttonName}
      </button>
    </>
  );
}
