import { useEffect, useState } from 'react'
import API from '../services/API'
import { List } from '../styles/component-styles'
import { Movie } from '../utils/interfaces'
import { MovieRow } from './MovieRow'

export function MovieList() {
  const [movieList, setMovieList] = useState<Movie[]>()

  useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList()
      setMovieList(list)
    }
    loadAll()
  }, [])

  return (
    <List style={{ marginTop: '6%' }}>
      {movieList?.map((movie, index) => (
        <MovieRow
          key={index}
          title={movie.title}
          slug={movie.slug}
          items={movie.items}
        />
      ))}
    </List>
  )
}
