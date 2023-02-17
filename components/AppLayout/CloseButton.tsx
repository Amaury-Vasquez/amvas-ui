import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface CloseButtonProps {
  isClosing: boolean;
  handleClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ isClosing, handleClose }) => (
  <button
    className="w-9 h-9 relative rounded-full hover:bg-transparent-white flex flex-col gap-1 p-2 items-center justify-center"
    disabled={isClosing}
    onClick={handleClose}
  >
    <AiOutlineClose className="w-full h-full" fill="white" />
  </button>
);

export default CloseButton;
