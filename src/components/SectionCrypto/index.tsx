import React from 'react';
import imgMobile from '@/assets/Screen_crypto.png'
import bgGradient from '@/assets/gradient-background-crypto.png'
import imgCard from '@/assets/business-card.png'

export const SectionCrypto = () => {
  return (
    <section className="bg-[#0F0722] relative mt-28">
      <img src={bgGradient} alt="bgGradient" className='absolute inset-0 z-0 w-full h-full' />
      <div className="container flex items-center z-10">
        <div className="flex pt-[90px] justify-between w-full">
          <div className='flex flex-col '>
            <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi">
              in-app<br/> crypto transfers
            </h2>
            <p className="text-white text-2xl font-normal w-[660px] font-gilroy mt-6">
              Send <span className='text-[#6529E0]'>$NIMBL </span>to your friend’s username in a few easy taps. Sign transactions with your fingerprint or
              face-id.
            </p>
            <div className='mt-auto'>
              <img src={imgCard} alt="imgCard" className='w-[355px]' />
            </div>
          </div>
          <div>
            <img src={imgMobile} alt="imgMobile" />
          </div>
        </div>
      </div>
    </section>
  );
};
