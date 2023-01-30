import { useState } from 'react';

export const useToggle = (active: boolean = false, time: number = 250) => {
  const [isActive, setActive] = useState(active);
  const [willClose, setWillClose] = useState(false);

  const handleClick = () => {
    if (!isActive) setActive(true);
    else {
      setWillClose(true);
      setTimeout(() => {
        setWillClose(false);
        setActive(false);
      }, time);
    }
  };

  return { isActive, willClose, handleClick };
};
