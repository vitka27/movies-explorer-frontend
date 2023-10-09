import React from "react";

export default function ToAction({ actionTitle, nameButton, patch }) {
  return (
    <>
      <div className="to-action">
        <p className="to-action__title">{actionTitle}</p>
        <a href={patch} className="to-action__register-link">{nameButton}</a>
      </div>
    </>
  );
}
