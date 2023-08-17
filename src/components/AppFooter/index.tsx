import React from 'react'
import logo from '@/assets/logo.png';
import { TwitterIcon } from '../icons/TwitterIcon';
import { TelegramIcon } from '../icons/TelegramIcon';
import { DiscordIcon } from '../icons/DiscordIcon';
import nimblBgImg from '@/assets/nimblTV.png'
import { HeroButton } from '../HeroButton';


export const AppFooter = () => {
  return (
    <footer className='mt-[calc(200px)] relative'>
      <img src={nimblBgImg} alt="nimblBgImg" className='mx-auto h-[322px] object-contain select-none pointer-events-none	'  />
      <div className='bg-[#20133E] h-36'>
        <div className='container pt-7 pb-4'>
        <div className='flex items-center '>
          <img src={logo} alt="logo" className="w-[121px] h-[44px] object-contain" />
          <div className='flex ml-9 gap-3 items-center'>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#"><TelegramIcon /></a>
            <a href="#"><DiscordIcon /></a>
          </div>
          <div className='flex gap-8 items-center ml-auto'><HeroButton xs regular><p className="font-rfdewi text-xs font-bold uppercase">Join the Disruption</p></HeroButton><HeroButton xs><p className="font-rfdewi text-xs font-bold uppercase">DOWNLOAD APP</p></HeroButton></div>
        </div>
        <p className='text-center text-white/50 text-base font-normal font-gilroy mt-8'>All rights resersed</p>
        </div>
      </div>
    </footer>
  )
}
