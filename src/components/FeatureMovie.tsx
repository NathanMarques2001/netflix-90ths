import { FeatureMovieData } from '../utils/interfaces'

export function FeatureMovie({ ...props }: FeatureMovieData) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${props.backdrop_path}`}
        alt={props.title}
      />
      <br />
      {props.title}
      <br />
      {props.overview}
      <br />
      {props.genres.map((item) => item.name)}
    </div>
  )
}
