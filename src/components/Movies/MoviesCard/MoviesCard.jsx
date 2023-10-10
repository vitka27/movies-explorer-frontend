import React from 'react'
import imgCard from '../../../images/movie-test.png'

export default function MoviesCard() {
  return (
    <figure className="movies-card">
      <img src={imgCard} alt="" className="movies-card__img" />
      <figcaption className="movies-card__title">33 слова о дизайне</figcaption>
      <button type="button" aria-label="Мне нравится" className="movies-card__like movies-card__like_active" ></button>
      <span className="movies-card__time">1ч42м</span>
    </figure>
  )
}
