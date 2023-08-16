import React from 'react';
import {WebClaimYourHandle} from '../icons/WebClaimYourHandle';
import radarIcon from '@/assets/radar-icon.png';
import { HeroButton } from '../HeroButton';
import user1 from '@/assets/user1.png'
import user2 from '@/assets/user2.png'
import user3 from '@/assets/user3.png'
import user4 from '@/assets/user4.png'
import user4Prime from '@/assets/user4-prime.png'
import user3Prime from '@/assets/user3-prime.png'
import user2Prime from '@/assets/user2-prime.png'
import user1Prime from '@/assets/user1-prime.png'

export const SectionClaim = () => {
  return (
    <section className="relative flex justify-center">
      <div><WebClaimYourHandle /></div>
      <img
        src={radarIcon}
        alt="radarIcon"
        className="w-[112px] h-[112px] absolute left-1/2 -translate-x-1/2 bottom-[30%]"
      />
      <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-20 text-5xl font-rfdewi font-black uppercase absolute left-1/2 top-[30%] -translate-x-1/2'>Claim Your Handle</h2>
      <div className="flex justify-center absolute left-1/2 bottom-[10%] -translate-x-1/2 ">
        <HeroButton>
          <p className="font-rfdewi text-2xl font-bold">DOWNLOAD APP</p>
        </HeroButton>
      </div>
      <div className='bg-[#20133E] pb-3 px-[5px] absolute left-[50%] -translate-x-[850px] top-[30%] rounded-md pt-7'>
        <img src={user1} alt="user1" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white/50 text-xl font-gilroy font-medium'>@diasnkteam</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[700px]  top-[50%] rounded-md pt-7'>
        <img src={user2} alt="user2" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white/50 text-xl font-gilroy font-medium'>@adilkhan.r</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[500px] top-[65%] rounded-md pt-7'>
        <img src={user3} alt="user3" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white/50 text-xl font-gilroy font-medium'>@kairkuka</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[250px] top-[60%] rounded-md pt-7'>
        <img src={user4} alt="user4" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white/50 text-xl font-gilroy font-medium'>@buman</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute right-[50%] translate-x-[850px]  top-[40%] rounded-md pt-7'>
        <img src={user4Prime} alt="user4Prime" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white text-xl font-gilroy font-medium'>@buman</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute right-[50%] translate-x-[700px]  top-[55%] rounded-md pt-7'>
        <img src={user3Prime} alt="user3Prime" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white text-xl font-gilroy font-medium'>@kairkuka</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute right-[50%] translate-x-[450px]  top-[65%] rounded-md pt-7'>
        <img src={user2Prime} alt="user2Prime" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white text-xl font-gilroy font-medium'>@adilkhan.r</p>
      </div>
      <div className='bg-[#20133E] pb-3 px-[7px] absolute right-[50%] translate-x-[250px]  top-[62%] rounded-md pt-7'>
        <img src={user1Prime} alt="user1Prime" className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
        <p className='text-white text-xl font-gilroy font-medium'>@diasnkteam</p>
      </div>
    </section>
  );
};
