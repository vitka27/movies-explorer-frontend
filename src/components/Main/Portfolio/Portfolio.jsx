import React from "react";

export default function Portfolio() {
  return (
    <section className="wrapper__section wrapper__section_theme_dark portfolio">
      <div className=" wrapper__section-container portfolio__container ">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__link">
            <a
              href="https://github.com/vitka27/how-to-learn"
              aria-label="Статичный сайт"
              target="_blank"
              className="portfolio__link-url"
              rel="noreferrer"
            >
              <p className="portfolio__link-title">Статичный сайт</p>
              <span className="portfolio__link-symbol">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              href="https://github.com/vitka27/russian-travel"
              aria-label="Адаптивный сайт"
              target="_blank"
              className="portfolio__link-url"
              rel="noreferrer"
            >
              <p className="portfolio__link-title">Адаптивный сайт</p>
              <span className="portfolio__link-symbol">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              href="https://github.com/vitka27/react-mesto-api-full-gha"
              aria-label="Одностраничное приложение"
              target="_blank"
              className="portfolio__link-url"
              rel="noreferrer"
            >
              <p className="portfolio__link-title">Одностраничное приложение</p>
              <span className="portfolio__link-symbol">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
