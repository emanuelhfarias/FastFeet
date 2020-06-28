import React from 'react';
import { Image } from './styles';

export default function Avatar({ profile, size, centralize }) {
  return (
    <Image
      size={size}
      centralize={centralize}
      source={{
        uri: profile.avatar
          ? profile.avatar.url.replace('localhost', '10.0.2.2')
          : `https://api.adorable.io/avatar/50/${profile.name}.png`,
      }}
    />
  );
}
