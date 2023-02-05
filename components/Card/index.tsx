import { FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface CardProps {
  title: string;
  content: ReactNode;
  href: string;
  height?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

const Card: FC<CardProps> = ({
  title,
  content,
  href,
  height,
  target,
  className,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        'w-full bg-white shadow-sm rounded-md flex flex-col border-b border-solid border-neutral-100',
        height ? `h-[${height}]` : 'h-64',
        className
      )}
    >
      <span className="text-base text-neutral-900 py-3 px-3 border-b border-solid border-neutral-100">
        {title}
      </span>
      <div className="flex items-center justify-center w-full h-full p-4">
        {content}
      </div>
    </Link>
  );
};

export default Card;
