import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { HiOutlineClipboard } from 'react-icons/hi';
import clsx from 'clsx';
import { IconButton } from '@/components';
import { useCopyableText } from '@/hooks';
import Tooltip from './Tooltip';

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
  iconColor = '#65a9fa',
  className,
  variant = 'normal',
  text,
  Icon = HiOutlineClipboard,
}) => {
  const [iconVisible, setIconVisible] = useState(false);
  const { isCopied, isError, showTooltip, closeTooltip, onCopyButtonClick } =
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
        <>
          <IconButton
            className="absolute w-9 h-9 top-1 right-1"
            disabled={closeTooltip}
            iconColor={iconColor}
            Icon={Icon}
            onClick={onCopyButtonClick}
          />
        </>
      )}
      {showTooltip && (
        <Tooltip
          willClose={closeTooltip}
          text={
            isCopied
              ? 'copied to clipboard!'
              : isError
              ? 'there was an error while copying'
              : ''
          }
        />
      )}
    </div>
  );
};

export default CopyableText;
