import clsx from 'clsx';
import { useRouter } from 'next/router';
import { NextFont } from '@next/font';
import { FC } from 'react';
import { FaReact } from 'react-icons/fa';
import HeaderLinks from './HeaderLinks';
import Menu from './Menu';
import SiderContent from './SiderContent';
import { Header, Modal, NavigationLink, Sider } from '@/components';
import { useToggle } from '@/hooks';
import { capitalize } from '@/utils/string';
import CloseButton from './CloseButton';

interface LayoutProps {
  children: React.ReactNode;
  font: NextFont;
}

const AppLayout: FC<LayoutProps> = ({ children, font }) => {
  const { isActive, willClose, handleClick } = useToggle(false, 280);
  const router = useRouter();
  const handleBlur = () => {
    if (isActive) handleClick();
  };

  return (
    <div
      className={clsx(
        'w-screen min-h-screen h-auto overflow-y-auto animate-fade-in-05 bg-slate-100',
        font.className
      )}
    >
      <Header
        left={<Menu isActive={isActive} onMenuClick={handleClick} />}
        middle={
          <span className="flex items-center justify-center w-fit h-full text-xl text-neutral-800 font-semibold">
            {router.pathname === '/'
              ? 'Facile UI'
              : router.pathname !== '_error' &&
                capitalize(
                  router.pathname.replace('/', '').split('-').join(' ')
                )}
          </span>
        }
        right={<HeaderLinks />}
      />
      {isActive && (
        <Modal className={clsx(willClose && 'animate-fade-out')}>
          <Sider
            className={clsx(
              'animate-appear-right origin-left',
              willClose && 'animate-dissapear-left origin-left'
            )}
            content={<SiderContent />}
            title={
              <div className="w-full flex items-center justify-between h-auto mb-2 px-4">
                <NavigationLink
                  href={'/'}
                  text="Facile UI"
                  Icon={FaReact}
                  className="text-xl font-semibold"
                />
                <CloseButton isClosing={willClose} handleClose={handleClick} />
              </div>
            }
            handleClose={handleBlur}
          />
        </Modal>
      )}
      <div className={clsx('p-6 max-mobileXS:p-1 w-full mt-12')}>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
