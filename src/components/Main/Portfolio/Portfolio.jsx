import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          Статичный сайт
          <a href="/" aria-label="Статичный сайт" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Адаптивный сайт
          <a href="/" aria-label="Адаптивный сайт" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Одностраничное приложение
          <a href="/" aria-label="Одностраничное приложение" target="_blank" className="portfolio__link-symbol">
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
