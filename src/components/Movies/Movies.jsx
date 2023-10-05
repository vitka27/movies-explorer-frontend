import React from 'react'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'

export default function Movies() {
  return (
    <>
      <MoviesCardList />
      <Preloader />
    </>
  )
}

