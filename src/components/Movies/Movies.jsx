import React from 'react'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </>
  )
}

