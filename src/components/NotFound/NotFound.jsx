import React from "react";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__code-err">404</h1>
      <p className="not-found__massage-err">Страница не найдена</p>
      <a href="/" className="not-found__link">Назад</a>
    </section>
  );
}
