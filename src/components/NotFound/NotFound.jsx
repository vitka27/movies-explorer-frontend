import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <h1 className="not-found__code-err">404</h1>
      <p className="not-found__massage-err">Страница не найдена</p>
      <Link onClick={() => navigate(-1)} className="not-found__link" aria-label="Назад">
        Назад
      </Link>
    </section>
  );
}
