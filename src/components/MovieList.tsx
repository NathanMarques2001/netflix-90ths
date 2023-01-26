import { useEffect, useState } from 'react'
import API from '../services/API'
import { List } from '../styles/component-styles'
import { FeatureMovieData, HomeListItem } from '../utils/interfaces'
import { FeatureMovie } from './FeatureMovie'
import { MovieRow } from './MovieRow'

export function MovieList() {
  const [movieList, setMovieList] = useState<HomeListItem[]>()
  const [featureData, setFeatureData] = useState<FeatureMovieData>()

  useEffect(() => {
    const loadAll = async () => {
      const data = await API.getHomeList()
      setMovieList(data)

      const originals = data.filter((item) => item.slug === 'originals')
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.length - 1),
      )
      const chosen = originals[0].items[randomChosen]
      const chosenInformations = await API.getFeatureMovie(chosen.id)
      console.log(chosenInformations)
      setFeatureData(chosenInformations)
    }
    loadAll()
  }, [])

  return (
    <>
      {featureData && <FeatureMovie {...featureData}/>}
      <List>
        {movieList?.map((movie, index) => (
          <MovieRow
            key={index}
            title={movie.title}
            slug={movie.slug}
            items={movie.items}
            adult
          />
        ))}
      </List>
    </>
  )
}
