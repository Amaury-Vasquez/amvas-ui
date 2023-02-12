import { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { IconButton } from '../IconButton';

const HeaderLinks: FC = () => (
  <div className="flex h-full w-fit px-4 items-center justify-center gap-2">
    <Link target="_blank" href="https://www.npmjs.com/">
      <IconButton className="w-8 h-8" Icon={FaNpm} iconColor="#c53635" />
    </Link>
    <Link target="_blank" href="https://github.com/Amaury-Vasquez/facile-ui">
      <IconButton className="w-8 h-8" Icon={FaGithub} iconColor="#000" />
    </Link>
  </div>
);

export default HeaderLinks;
