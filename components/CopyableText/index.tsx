import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { HiOutlineClipboard } from 'react-icons/hi';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import { useCopyableText } from '@/hooks';

type TextVariants = 'italic' | 'normal';

interface CopyableTextProps {
  color?: string;
  className?: string;
  Icon?: IconType;
  variant?: TextVariants;
  iconColor?: string;
  text: string;
}

const CopyableText: FC<CopyableTextProps> = ({
  color,
  iconColor = '#af68f6',
  className,
  variant = 'normal',
  text,
  Icon = HiOutlineClipboard,
}) => {
  const [iconVisible, setIconVisible] = useState(false);
  const { isCopied, isCopying, isError, onCopyButtonClick } =
    useCopyableText(text);

  return (
    <div
      className={clsx(
        'justify-start items-center py-4 pl-4 pr-8 relative flex',
        className
      )}
      onMouseEnter={() => setIconVisible(true)}
      onMouseLeave={() => setIconVisible(false)}
    >
      <span
        className={clsx(
          color ? color : 'text-slate-700',
          variant !== 'normal' && `${variant}`
        )}
      >
        {text}
      </span>
      {iconVisible && (
        <IconButton
          className="absolute w-9 h-9 top-1 right-1"
          iconColor={iconColor}
          Icon={Icon}
          onClick={onCopyButtonClick}
        />
      )}
    </div>
  );
};

export default CopyableText;
