import { HomeListItem } from '../utils/interfaces'
import React from 'react'
import { Banner, MovieType } from '../styles/component-styles'
import { Frame } from 'react95'

export const MovieRow: React.FC<HomeListItem> = ({ title, items }) => {
  return (
    <div>
      <MovieType>{title}</MovieType>
      <Banner>
        {items.length > 0 &&
          items.map((item, index) => (
            <div
              key={index}
              style={{ display: 'inline-block', width: '250px' }}
            >
              <Frame
                style={{
                  padding: '0.5rem',
                  height: '370px',
                  transform: 'scale(0.9)',
                  display: 'flex',
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </Frame>
            </div>
          ))}
      </Banner>
    </div>
  )
}
