import React from 'react'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'

export default function Movies() {
  return (
    <main className='wrapper__main'>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </main>
  )
}

