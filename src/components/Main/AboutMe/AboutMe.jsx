import React from "react";
import meImage from "../../../images/me-image.png";

export default function AboutMe() {
  return (
    <article className="wrapper__section wrapper__section_theme_dark about-me">
      <div className=" about-me__container wrapper__section-container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <img src={meImage} alt="фото автора" className="about-me__info-image" />
          <div className="aobout-me__info-block">
            <h3 className="about-me__info-name">Виталий</h3>
            <p className="about-me__info-experience">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__info-text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="https://github.com/vitka27" className="about-me__info-link-github" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
