import { Movie } from '../utils/interfaces'
import React from 'react'
import { Banner, MovieType } from '../styles/component-styles'
import { GroupBox, Window, WindowContent } from 'react95'

export const MovieRow: React.FC<Movie> = ({ title, slug, items }) => {
  return (
    <div>
      <MovieType>{title}</MovieType>
      <Banner>
        {items.results.length > 0 &&
          items.results.map((item, index) => (
            <div
              key={index}
              style={{ display: 'inline-block', width: '250px' }}
            >
              <GroupBox
                style={{
                  padding: '0',
                  margin: '0',
                  transform: 'scale(0.9)',
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </GroupBox>
            </div>
          ))}
      </Banner>
    </div>
  )
}
