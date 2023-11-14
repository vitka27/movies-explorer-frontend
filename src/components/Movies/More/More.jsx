import React from "react";

export default function More({handleClickMore}) {
  return (
    <div className="more">
      <div className="more__container">
        <button onClick={handleClickMore} type="button" className="more__title" aria-label="Ещё">
          Ещё
        </button>
      </div>
    </div>
  );
}
