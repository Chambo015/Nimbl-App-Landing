import {AppButton} from '../AppButton';
import logo from '@/assets/logo.png';
import { MenuIcon } from '../icons/MenuIcon';
import { FC, useState } from 'react';
import { MobileMenu } from '../MobileMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isInviteOpen: boolean,
  setIsInviteOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

export const AppHeader: FC<Props> = ({setIsModalOpen, isInviteOpen, setIsInviteOpen}) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
  const isMobile = useMediaQuery('(max-width: 640px)')
  return (
    <header className="w-full bg-[rgba(33,25,61,.30)] h-20 max-sm:h-[50px] fixed top-0 inset-x-0 backdrop-blur-md z-50">
      <div className="container flex items-center h-full gap-[20px] justify-between">
        <button onClick={() => {setIsInviteOpen(false)}}><img src={logo} alt="logo" className="w-[121px] h-[44px] object-contain" /></button>
        <nav className="font-[Gilroy] flex gap-[10px] items-center max-sm:hidden">
          <a href='#' className=" text-center text-white text-base font-medium hover:text-[#0066FE]">Intro</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium ">/</div>
          <a href='#' className=" text-center text-white text-base font-medium hover:text-[#0066FE]">AI solutions</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium hover:text-[#0066FE]">Token</a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <button onClick={() => {setIsInviteOpen(true)}} className={`text-center hover:text-[#0066FE] ${isInviteOpen ? 'text-white':'text-white'} text-base font-medium`}>Invite</button>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <button onClick={() => {setIsModalOpen(true)}} className=" text-center text-white text-base font-medium hover:text-[#0066FE]">Join Community</button>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href='#' className=" text-center text-white text-base font-medium hover:text-[#0066FE]">Contacts</a>
        </nav>
        <div className='flex gap-[20px] items-center max-sm:hidden'>
          <a href="#" className=" text-center text-white text-base font-medium font-[Gilroy] hover:text-[#0066FE]">Lightpaper</a>
          <AppButton>DOWNLOAD APP</AppButton>
        </div>
        <button className='sm:hidden' onClick={() => {setIsOpenMenuMobile(p => !p)}}>
          <MenuIcon />
        </button>
      </div>
      {isMobile && <MobileMenu isOpen={isOpenMenuMobile} setIsInviteOpen={setIsInviteOpen} setIsOpenMenuMobile={setIsOpenMenuMobile}/>}
    </header>
  );
};
