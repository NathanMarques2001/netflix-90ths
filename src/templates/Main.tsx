import { Tile } from '../components/LoadingBar'
import { NavBar } from '../components/NavBar'
import { MovieList } from '../components/MovieList'
import { FeatureMovie } from '../components/FeatureMovie'
import { useState } from 'react'

export function Main() {
  const[featuredData, setFeaturedData] = useState(null)
  return (
    <div className="page">
      {/* <NavBar /> */}

      <MovieList />
    </div>
  )
}
