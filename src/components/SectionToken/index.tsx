import React from 'react';
import imgEarth from '@/assets/planet-nimbl.png';
import stake from '@/assets/stake.png';
import transfer from '@/assets/transfer.png';
import cursor from '@/assets/cursor.png';
import network from '@/assets/network.png';
import pc from '@/assets/pc.png';
import starShips from '@/assets/star-ships.png';

export const SectionToken = () => {
  return (
    <section className="pt-[200px]">
      <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[88px] leading-none font-rfdewi font-black text-center">
        NIMBL TOKEN
      </h2>
      <p className="text-center text-white font-gilroy text-3xl mt-3">
        $NIMBL is a utility token that acts as the platform currency
      </p>
      <div className="flex h-[1000px] relative">
        <img src={imgEarth} alt="imgEarth" className="ml-auto absolute right-0 -top-[100px]" />
        <img src={starShips} alt="starShips" className='w-[380px] absolute left-1/2 top-[30%] -translate-x-1/2' />
        <div className='container 2xl:max-w-[1600px]'>
            <div className='mt-28'>
              <div className="flex items-center gap-5">
                <img src={stake} alt="stake" className='w-[30px] h-[30px]' />
                <p className="text-3xl leading-none text-white font-gilroy">Stake $Nimbl to gain governance</p>
              </div>
              <div className="flex items-center gap-5 mt-20">
                <img src={transfer} alt="transfer" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy">Transfer $Nimbl to a username</p>
              </div>
              <div className="flex items-center gap-5 mt-20">
                <img src={cursor} alt="cursor" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy">Access token-gated content</p>
              </div>
              <div className="flex items-center gap-5 mt-20">
                <img src={network} alt="network" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy">Use $Nimbl to Tip creators</p>
              </div>
              <div className="flex items-center gap-5 mt-20">
                <img src={pc} alt="pc" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy">Subscribe to Nimbl Ultra</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
