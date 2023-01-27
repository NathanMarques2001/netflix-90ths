import { Anchor } from 'react95'

export function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        fontFamily: 'ms_sans_serif',
      }}
    >
      <p>Direitos de imagem da empresa Netflix</p>
      <p>
        Dados pegos pela API do site
        <Anchor href="https://www.themoviedb.org/" target="_blank">
          The Movie Database
        </Anchor>
      </p>
    </div>
  )
}
