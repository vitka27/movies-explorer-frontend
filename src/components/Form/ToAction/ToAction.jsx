import React from "react";
import { Link } from "react-router-dom";

export default function ToAction({ actionTitle, nameButton, patch }) {
  return (
    <>
      <div className="to-action">
        <p className="to-action__title">{actionTitle}</p>
        <Link to={patch} className="to-action__register-link">{nameButton}</Link>
      </div>
    </>
  );
}
