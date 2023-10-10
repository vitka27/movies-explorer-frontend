import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__block">
        <div className="footer__coopirait">
          <p className="footer__coopirait-text">© 2020</p>
        </div>
        <div className="footer__info">
          <a href="https://practicum.yandex.ru" aria-label='Яндекс.Практикум' className="footer__link" target="_blank" rel='noreferrer'>
            Яндекс.Практикум
          </a>
          <a href="https://github.com" aria-label='Github' className="footer__link" target="_blank" rel='noreferrer'>
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

