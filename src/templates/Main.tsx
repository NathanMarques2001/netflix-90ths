import { Tile } from '../components/LoadingBar'
import { NavBar } from '../components/NavBar'
import { MovieList } from '../components/MovieList'
import { useState } from 'react'
import { Footer } from '../components/Footer'

export function Main() {
  const[featuredData, setFeaturedData] = useState(null)
  return (
    <div className="page">
      {<NavBar />}
      <MovieList />
      <Footer />
    </div>
  )
}
