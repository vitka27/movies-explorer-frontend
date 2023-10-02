import React from "react";

export default function AboutProject() {
  return (
    <section className="about-project">
      <h1 className="about-project__title">О проекте</h1>
      <div className="about-project__content">
        <h1 className="about-project__content-title">
          Дипломный проект включал 5 этапов
        </h1>
        <h1 className="about-project__content-title">
          На выполнение диплома ушло 5 недель
        </h1>
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
        <p className="about-project__graphick-title">1 неделя</p>
        <p className="about-project__graphick-title">4 недели</p>
        <p className="about-project__graphick-text">Back-end</p>
        <p className="about-project__graphick-text">Front-end</p>
      </div>
    </section>
  );
}
