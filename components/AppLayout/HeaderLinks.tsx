import { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { IconButtonLink } from '@/components';

const HeaderLinks: FC = () => (
  <div className="flex h-full w-fit px-4 items-center justify-center gap-2">
    <IconButtonLink
      className="w-10 h-10"
      Icon={FaGithub}
      iconColor="#000"
      target="_blank"
      href="https://github.com/Amaury-Vasquez/facile-ui"
    />
  </div>
);

export default HeaderLinks;
