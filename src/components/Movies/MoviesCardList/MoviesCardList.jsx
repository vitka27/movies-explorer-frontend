import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {

  return (

    <article className="wrapper__section wrapper__section_theme_dark movies-card-list">
      <div className=" movies-card-list__container wrapper__section-container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
      </div>
    </article>

  )
}

