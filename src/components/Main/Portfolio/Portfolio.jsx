import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          Статичный сайт
          <a href="https://github.com/vitka27/how-to-learn" aria-label="Статичный сайт" target="_blank" className="portfolio__link-symbol" rel="noreferrer">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Адаптивный сайт
          <a href="https://github.com/vitka27/russian-travel" aria-label="Адаптивный сайт" target="_blank" className="portfolio__link-symbol" rel="noreferrer">
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          Одностраничное приложение
          <a href="https://github.com/vitka27/react-mesto-api-full-gha" aria-label="Одностраничное приложение" target="_blank" className="portfolio__link-symbol" rel="noreferrer">
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
