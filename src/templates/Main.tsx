import { Tile } from '../components/LoadingBar'
import { NavBar } from '../components/NavBar'
import { MovieList } from '../components/MovieList'

export function Main() {
  return (
    <div className="page">
      <NavBar />
      <MovieList />
    </div>
  )
}
