import { FC } from 'react';
import { Avatar } from '@/components';

const defaultImages = [
  'https://i.imgur.com/39jqiyC.jpg?1',
  'https://i.imgur.com/bM4humM.jpg?3',
  'https://i.imgur.com/UYQhEzt.jpg',
  'https://i.imgur.com/7q8sc4h.jpg',
];

export const AvatarOverview: FC = () => (
  <div className="flex w-full justify-center items-center gap-2">
    {defaultImages.map((image, i) => (
      <Avatar
        size="lg"
        src={image}
        alt={`avatarimg${i}`}
        key={`avataroverviewimg${i}`}
      />
    ))}
  </div>
);
