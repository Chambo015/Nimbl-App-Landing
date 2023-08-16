import React from 'react';
import radarImg from '@/assets/bg-radar.png';
import radarIcon from '@/assets/radar-icon.png';
import { BlockIcon } from '../icons/BlockIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { UserSearchIcon } from '../icons/UserSearchIcon';

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
          <div className='w-[280px] flex flex-col  items-center gap-4'>
            <BlockIcon />
            <p className=' text-center text-white text-2xl font-normal font-gilroy'>Decisions are guided by clear, open-source guidelines</p>
          </div>
          <div className='w-[315px] flex flex-col items-center gap-4'>
            <SearchIcon />
            <p className=' text-center text-white text-2xl font-normal font-gilroy'>Every instance is committed on-chain, with explanation and post links</p>
          </div>
          <div className='w-[250px] flex flex-col items-center gap-4'>
            <UserSearchIcon />
            <p className=' text-center text-white text-2xl font-normal font-gilroy'>Moderation Guidelines developed by Nimbl Collective DAO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
