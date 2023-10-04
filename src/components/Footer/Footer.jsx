import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      <div className="footer__block">
        <div className="footer__coopirait">
          <p className="footer__coopirait-text">© 2020</p>
        </div>
        <div className="footer__info">
          <a href="https://practicum.yandex.ru" className="footer__link" target="_blank">
            Яндекс.Практикум
          </a>
          <a href="https://github.com" className="footer__link" target="_blank">
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

