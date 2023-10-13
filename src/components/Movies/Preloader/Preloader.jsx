import React from "react";

export default function Preloader() {
  return (
    <section className="wrapper__section wrapper__section_theme_dark preloader">
      <div className=" preloader__container wrapper__section-container">
        <button type="button" className="preloader__title" aria-label="Ещё">
          Ещё
        </button>
      </div>
    </section>
  );
}
