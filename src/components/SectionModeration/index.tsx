import React from 'react';
import radarImg from '@/assets/bg-radar.png';
import radarIcon from '@/assets/radar-icon.png';
import { BlockIcon } from '../icons/BlockIcon';
import { SearchIcon } from '../icons/SearchIcon';

export const SectionModeration = () => {
  return (
    <section className='pt-36'>
      <div className="container">
        <div className="relative">
          <img src={radarImg} alt="radarImg" className="w-full object-contain mix-blend-lighten" />
          <img src={radarIcon} alt="radarIcon" className='w-[112px] h-[112px] absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2' />
        </div>
        <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-20 text-5xl font-rfdewi font-black uppercase'>Redefining Moderation with Transparent AI</h2>
        <p className='font-gilroy mt-6 text-center text-white text-2xl font-normal'>Embrace a new era of community governance with our AI-powered moderation system.</p>
        <div className='flex justify-between mt-16'>
          <div className='w-[500px] flex flex-col  items-center gap-4'>
            <BlockIcon />
            <p className=' text-center text-white text-2xl font-normal font-gilroy'>Every decision, from bans to blocks, is guided by clear, open-source guidelines, ensuring fairness and transparency at every step</p>
          </div>
          <div className='w-[490px] flex flex-col items-center gap-4'>
            <SearchIcon />
            <p className=' text-center text-white text-2xl font-normal font-gilroy'>Experience a community where actions are explained, not enforced</p>
          </div>
        </div>
      </div>
    </section>
  );
};
