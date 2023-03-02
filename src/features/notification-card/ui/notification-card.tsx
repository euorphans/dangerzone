import { NotificationCardComponents } from './notification-card.components';
import { NotificationCardStyles } from './notification-card.styles';
import React, { FC, HTMLAttributes } from 'react';
import { NotificationCardTypes } from '@features/notification-card/model/notification-card.types';
import { Flex, Text } from '@shared/ui';
import { Avatar } from '@features/avatar-user';

export const NotificationCard: FC<
  HTMLAttributes<HTMLDivElement> & NotificationCardTypes
> = ({ id, username, action, message, date }) => {
  return (
    <NotificationCardComponents.Wrapper key={id}>
      <Avatar
        large={43}
        premium={{ size: 16, type: 'plus' }}
        src={`https://skin.vimeworld.com/head/${username}/44.png`}
      />
      <NotificationCardComponents.Out>
        <Flex
          direction={'row'}
          style={{ width: '100%' }}
          justify={'space-between'}
        >
          <Text style={{ fontSize: 'var(--fontSizes-2)' }} weight={2}>
            {username}
          </Text>
          <Text
            style={{ fontSize: 'var(--fontSizes-0)' }}
            paint={'var(--black60)'}
            weight={1}
          >
            35 мин.
          </Text>
        </Flex>
        <NotificationCardStyles.Description paint={'var(--black60)'} weight={1}>
          {message}
        </NotificationCardStyles.Description>
      </NotificationCardComponents.Out>
    </NotificationCardComponents.Wrapper>
  );
};
