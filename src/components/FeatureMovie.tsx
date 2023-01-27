import { Window, WindowContent, GroupBox, Button } from 'react95'
import { FeatureMovieData } from '../utils/interfaces'

export function FeatureMovie({ ...props }: FeatureMovieData) {
  return (
    <div
      style={{
        height: '110vh',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Window
        style={{
          marginLeft: '10px',
          maxWidth: '35%',
          fontFamily: 'ms_sans_serif',
        }}
      >
        <WindowContent>
          <GroupBox label={<p style={{
            fontWeight: 'bold'
          }}>{props.title}</p>}>{props.overview}</GroupBox>
          <GroupBox>
            {props.genres.map((genre, index) => (
              `${genre.name}, `
            ))}
          </GroupBox>
          <GroupBox>
            <Button fullWidth>Assistir</Button>
          </GroupBox>
        </WindowContent>
      </Window>
    </div>
  )
}
