import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface HeaderProps {
  className?: string;
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
}

const Header: FC<HeaderProps> = ({ className, left, middle, right }) => (
  <header
    className={clsx(
      'flex items-center justify-between h-12 w-screen px-4 max-mobileXS:px-1 fixed z-10 bg-slate-100 border border-solid border-neutral-200',
      className
    )}
  >
    <div className="h-full justify-self-left">{left && left}</div>
    <div className="h-full justify-self-center">{middle && middle}</div>
    <div className="h-full justify-self-right">{right && right}</div>
  </header>
);

export default Header;
