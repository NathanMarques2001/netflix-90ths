import { ComponentMeta } from '@storybook/react'
import { Avatar } from 'react95'

import Photo from '../assets/photo.png'
import { Card } from '../styles/template-styles'

export default {
  title: 'Other/Avatar',
  component: Avatar,
  decorators: [(story) => <Card>{story()}</Card>],
} as ComponentMeta<typeof Avatar>

export function Home() {
  return (
    <Card>
      <div>
        <Avatar square size={250}>
          <span role="img" aria-label="avatar">
            <img src={Photo} alt="" />
          </span>
        </Avatar>
        <p>Usuário</p>
      </div>
    </Card>
  )
}

Home.story = {
  name: 'Home',
}
