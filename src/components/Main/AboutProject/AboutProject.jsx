import React from "react";

export default function AboutProject() {
  return (
    <article className="wrapper__section wrapper__section_theme_dark about-project">
      <div className=" about-project__container wrapper__section-container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <h3 className="about-project__content-title">
            Дипломный проект включал 5 этапов
          </h3>
          <h3 className="about-project__content-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__content-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="about-project__content-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__graphick">
          <h4 className="about-project__graphick-title">1 неделя</h4>
          <h4 className="about-project__graphick-title">4 недели</h4>
          <p className="about-project__graphick-text">Back-end</p>
          <p className="about-project__graphick-text">Front-end</p>
        </div>
      </div>
    </article>
  );
}
