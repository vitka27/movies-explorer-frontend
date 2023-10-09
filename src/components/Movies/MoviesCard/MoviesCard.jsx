import React from 'react'
import imgCard from '../../../images/movie-test.png'

export default function MoviesCard() {
  return (
    <div className="movies-card">
      <img src={imgCard} alt="" className="movies-card__img" />
      <div className="movies-card__title">33 слова о дизайне</div>
      <button type="button" aria-label="Мне нравится" className="movies-card__like movies-card__like_active"></button>
      <span className="movies-card__time">1ч42м</span>
    </div>
  )
}
