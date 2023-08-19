import {AppButton} from '../AppButton';
import logo from '@/assets/logo.png';
import { MenuIcon } from '../icons/MenuIcon';

export const AppHeader = () => {
  return (
    <header className="w-full bg-[rgba(33,25,61,.30)] h-20 max-sm:h-[50px] fixed top-0 inset-x-0 backdrop-blur-md z-50">
      <div className="container flex items-center h-full gap-[20px] justify-between">
        <img src={logo} alt="logo" className="w-[121px] h-[44px] object-contain" />
        <nav className="font-[Gilroy] flex gap-[10px] items-center max-sm:hidden">
          <a href='#' className=" text-center text-white text-base font-medium">Intro</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium">AI solutions</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium">Token</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium">Invite</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium">Join Community</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium">Contacts</a>
        </nav>
        <div className='flex gap-[20px] items-center max-sm:hidden'>
          <a href="#" className=" text-center text-white text-base font-medium font-[Gilroy]">Lightpaper</a>
          <AppButton>DOWNLOAD APP</AppButton>
        </div>
        <button className='sm:hidden'>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};
