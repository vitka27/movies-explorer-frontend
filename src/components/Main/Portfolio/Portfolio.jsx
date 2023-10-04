import React from "react";
import arrow from "../../../image/arrow.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          Статичный сайт
          <a href="#" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Адаптивный сайт
          <a href="#" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Одностраничное приложение
          <a href="#" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
