import React from "react";

export default function Button({ buttonName }) {
  return (
    <>
      <button type="submit" className="button">
        {buttonName}
      </button>
    </>
  );
}
