import { ComponentMeta } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react95'
import { LoadingBar } from '../styles/component-styles'

export default {
  title: 'Controls/ProgressBar',
  component: ProgressBar,
  decorators: [(story) => <LoadingBar>{story()}</LoadingBar>],
} as ComponentMeta<typeof ProgressBar>

export function Tile() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(previousPercent + diff, 100)
      })
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <LoadingBar>
      <div>
        <ProgressBar
          variant="tile"
          value={Math.floor(percent)}
          style={{ width: '70%' }}
        />
      </div>
    </LoadingBar>
  )
}

Tile.story = {
  name: 'tile',
}
