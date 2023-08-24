import React from 'react';
import imgMobile from '@/assets/Screen_crypto.png'
import imgMobileSm from '@/assets/Screen_crypto-sm.png'
import bgGradient from '@/assets/gradient-background-crypto.png'
import imgCard from '@/assets/business-card.png'
import { HeroButton } from '../HeroButton';

export const SectionCrypto = () => {
  return (
    <section className="bg-[#0F0722] relative max-sm:mt-5">
      <img  src={bgGradient} alt="bgGradient" className='absolute inset-0 z-0 w-full h-full' loading="lazy" />
      <div className="container flex items-center z-10">
        <div className="flex pt-[90px] justify-between w-full max-sm:pt-5">
          <div className='flex flex-col '>
            <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl">
              in-app<br className='max-sm:hidden'/> crypto transfers
            </h2>
            <p className="text-white text-2xl font-normal w-[660px] font-gilroy mt-6 max-sm:text-base max-sm:w-full">
              Send <span className='text-[#6529E0]'>$NIMBL </span>to your friend’s username in a few easy taps. Sign transactions with your fingerprint or
              face-id.
            </p>
           <div className='-mb-20 mt-7 hidden max-sm:block'> <HeroButton xs><p className="font-rfdewi text-xs font-bold uppercase max-sm:text-[10px] leading-none">TRY NOW</p></HeroButton></div>
            <div className='mt-auto max-sm:mt-7 gap-20 flex max-sm:items-end max-sm:gap-3 max-sm:justify-between'>
              <img src={imgCard} alt="imgCard" className='w-[355px] max-sm:w-[163px]' loading="lazy" />
              <img src={imgMobileSm} alt="imgMobileSm" className='hidden max-sm:block' loading="lazy" />
              <div className='max-sm:hidden'> <HeroButton xs><p className="font-rfdewi text-xs font-bold uppercase max-sm:text-[10px] leading-none">TRY NOW</p></HeroButton></div>
            </div>
          </div>
          <div>
            <img src={imgMobile} alt="imgMobile" className='max-sm:hidden' loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};
