import { ComponentMeta } from '@storybook/react';
import { Avatar, GroupBox } from 'react95';
import { Link } from 'react-router-dom';

import Photo from '../assets/photo.png';
import { Card } from '../styles/component-styles';
import { User } from '../utils/interfaces';

export default {
  title: 'Other/Avatar',
  component: Avatar,
  decorators: [(story) => <Card>{story()}</Card>],
} as ComponentMeta<typeof Avatar>;

export function UserCard({ name }: User) {
  return (
    <Card>
      <Link to="/main">
        <GroupBox>
          <div>
            <Avatar square size={200}>
              <span role="img" aria-label="avatar">
                <img src={Photo} alt="avatar" />
              </span>
            </Avatar>
            <p>{name}</p>
          </div>
        </GroupBox>
      </Link>
    </Card>
  );
}

UserCard.story = {
  name: 'UserCard',
};
