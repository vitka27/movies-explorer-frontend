import React from "react";
import meImage from "../../../images/me-image.png";

export default function AboutMe() {
  return (
    <article className="about-me">
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
          <a href="https://github.com/" className="about-me__info-link-github">
            Github
          </a>
        </div>
      </div>
    </article>
  );
}
