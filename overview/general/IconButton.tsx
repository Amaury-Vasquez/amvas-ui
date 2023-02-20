import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaLink, FaNpm, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IconButton } from '@/components';

export const IconButtonOverview: FC = () => (
  <div className="w-full h-full flex flex-col gap-6 items-center justify-center overflow-hidden">
    <div className="flex gap-4 justify-center items-center">
      <IconButton className="h-10 w-10" Icon={FaReact} iconColor="#61d4f1" />
      <IconButton
        className="h-10 w-10"
        Icon={SiTypescript}
        iconColor="#2f76bd"
      />
      <IconButton
        className="h-10 w-10"
        Icon={SiTailwindcss}
        iconColor="#3bbef5"
      />
      <IconButton
        className="h-10 w-10"
        Icon={SiNextdotjs}
        iconColor="#000000"
      />
    </div>
    <div className="flex gap-4 justify-center items-center">
      <IconButton className="h-10 w-10 text-red-800" Icon={FaNpm} />
      <IconButton className="h-10 w-10" Icon={HiOutlineMenu} />
      <IconButton className="h-10 w-10 text-primary" Icon={FaLink} />
      <IconButton className="h-10 w-10" Icon={AiOutlineClose} />
    </div>
  </div>
);
