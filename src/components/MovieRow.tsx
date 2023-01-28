import { HomeListItem } from '../utils/interfaces'
import React, { useState } from 'react'
import { Banner, ButtonContainer, MovieType } from '../styles/component-styles'
import { Frame, WindowContent, GroupBox, Button } from 'react95'

export const MovieRow: React.FC<HomeListItem> = ({ title, items }) => {
  const [open, setOpen] = useState(false)
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listWidth = items.length * 211.5
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth
    }
    setScrollX(x)
  }
  return (
    <div>
      <WindowContent>
        <GroupBox label={<MovieType>{title}</MovieType>}>
          <ButtonContainer>
            <Button
              primary
              style={{ zIndex: '9998', height: '60%' }}
              onClick={handleLeftArrow}
            >
              &lt;
            </Button>
            <Button
              primary
              style={{ zIndex: '9998', height: '60%' }}
              onClick={handleRightArrow}
            >
              &gt;
            </Button>
          </ButtonContainer>
          <Banner style={{ marginLeft: scrollX, width: items.length * 208 }}>
            {items.length > 0 &&
              items.map((item, index) => (
                <div
                  key={index}
                  style={{ display: 'inline-block', width: '208px' }}
                >
                  <Frame
                    style={{
                      padding: '0.5rem',
                      height: '300px',
                      transform: 'scale(0.9)',
                      display: 'flex',
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.original_title}
                      onClick={() => setOpen(true)}
                    />
                  </Frame>
                </div>
              ))}
          </Banner>
        </GroupBox>
      </WindowContent>
    </div>
  )
}
