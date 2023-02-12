import { FC } from 'react';

interface MenuProps {
  isActive: boolean;
  onMenuClick: () => void;
}

const Menu: FC<MenuProps> = ({ isActive, onMenuClick }) => (
  <div className="flex items-center justify-center gap-4 h-full">
    <button
      className="w-9 h-9 rounded-full hover:bg-gray-200 flex flex-col gap-1 py-1 px-2 items-center justify-center"
      disabled={isActive}
      onClick={onMenuClick}
    >
      <div className="h-[2px] w-full bg-gray-600 rounded-full"></div>
      <div className="h-[2px] w-full bg-gray-600 rounded-full"></div>
      <div className="h-[2px] w-full bg-gray-600 rounded-full"></div>
    </button>
  </div>
);

export default Menu;
