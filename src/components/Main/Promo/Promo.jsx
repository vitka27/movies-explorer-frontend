import React from 'react'
import landingLogo from '../../../images/landing-logo.svg'

export default function Promo() {
  return (
    <section className="wrapper__section wrapper__section_theme_blue promo">
      <div className=" promo__container wrapper__section-container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={landingLogo} alt="абстракция" />
      </div>
    </section>
  )
}
