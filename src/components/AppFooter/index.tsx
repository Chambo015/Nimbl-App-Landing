import React from 'react'
import logo from '@/assets/logo.png';
import { TwitterIcon } from '../icons/TwitterIcon';
import { TelegramIcon } from '../icons/TelegramIcon';
import { DiscordIcon } from '../icons/DiscordIcon';
import nimblBgImg from '@/assets/nimblTV.png'
import { HeroButton } from '../HeroButton';


export const AppFooter = () => {
  return (
    <footer className='mt-[200px] relative max-sm:mt-[100px]'>
      <img src={nimblBgImg} alt="nimblBgImg" className='mx-auto container object-contain select-none pointer-events-none' loading="lazy" />
      <div className='bg-[#20133E] h-36 max-sm:h-24'>
        <div className='container pt-7 pb-4 max-sm:pb-2 max-sm:pt-5'>
        <div className='flex items-center '>
          <img src={logo} alt="logo" className="w-[121px] h-[44px] max-sm:w-[65px] max-sm:h-[28px] object-contain" loading="lazy" />
          <div className='flex ml-9 gap-3 items-center'>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#"><TelegramIcon /></a>
            <a href="#"><DiscordIcon /></a>
          </div>
          <div className='flex gap-8 items-center ml-auto'><HeroButton xs regular><p className="font-rfdewi text-xs max-sm:text-[8px] leading-none font-bold uppercase">Join the Disruption</p></HeroButton><div className='max-sm:hidden'><HeroButton xs><p className="font-rfdewi text-xs font-bold uppercase">DOWNLOAD APP</p></HeroButton></div></div>
        </div>
        <p className='text-center text-white/50 text-base font-normal font-gilroy mt-8 max-sm:mt-3 max-sm:text-xs '>All rights resersed</p>
        </div>
      </div>
    </footer>
  )
}
