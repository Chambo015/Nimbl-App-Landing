import React from 'react';
import imgMobileGpt from '@/assets/ai-gpt-mobile.png';
import imglaunguages from '@/assets/ai-launguages.png';
import imgFeed from '@/assets/feed-ai.png';
import iconUK from '@/assets/UK.png';
import iconChina from '@/assets/China.png';
import iconFrance from '@/assets/France.png';
import iconGermany from '@/assets/Germany.png';
import iconIndia from '@/assets/India.png';
import iconItaly from '@/assets/Italy.png';
import iconKorea from '@/assets/Korea.png';
import iconSweden from '@/assets/Sweden.png';
import iconSwitzerland from '@/assets/Switzerland.png';
import iconTurkey from '@/assets/Turkey.png';
import iconUS from '@/assets/US.png';

export const SectionGridAI = () => {
  return (
    <section>
      <div className="container pt-[200px] max-sm:pt-[100px]">
        <div className="grid-cols-2 gap-10 grid grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-none">
          <div className="bg-[#20133E] pt-5 px-10">
            <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none max-sm:text-2xl">
              ai powered search
            </h3>
            <p className="font-gilroy text-2xl mt-6 max-sm:text-base max-sm:text-center">
              Effortless content discovery powered by our AI's deep understanding of video narratives
            </p>
            <div className="mt-10">
              <img loading="lazy" src={imgMobileGpt} alt="imgMobileGpt" className="w-[290px] object-contain mx-auto" />
            </div>
          </div>
          <div className="bg-[#20133E] pt-5 flex flex-col">
            <div className="px-10">
              <p className="text-center text-white text-2xl font-normal uppercase tracking-[14.64px] font-gilroy max-sm:text-xs max-sm:tracking-[8px]">
                translate video
              </p>
              <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none mt-3 max-sm:text-2xl">
                into 40 languages
              </h3>
              <div className="flex gap-5 justify-around mt-9">
                <img loading="lazy" src={iconUK} alt="iconUK" />
                <img loading="lazy" src={iconChina} alt="iconChina" />
                <img loading="lazy" src={iconFrance} alt="iconFrance" />
                <img loading="lazy" src={iconGermany} alt="iconGermany" />
                <img loading="lazy" src={iconIndia} alt="iconIndia" />
                <img loading="lazy" src={iconItaly} alt="iconItaly" className='max-sm:hidden'/>
                <img loading="lazy" src={iconKorea} alt="iconKorea" className='max-sm:hidden'/>
                <img loading="lazy" src={iconSweden} alt="iconSweden" className='max-sm:hidden'/>
                <img loading="lazy" src={iconSwitzerland} alt="iconSwitzerland" />
                <img loading="lazy" src={iconUS} alt="iconUS" />
                <img loading="lazy" src={iconTurkey} alt="iconTurkey" />
              </div>
            </div>
            <div className="pt-10 mt-auto">
              <img loading="lazy" src={imglaunguages} alt="imgMobileGpt" className="w-full h-[260px] object-cover" />
            </div>
          </div>
          <div className="bg-[#20133E] pt-5 px-10">
            <div className='flex flex-col justify-center items-center'>
              <div className="flex gap-5 items-center  max-sm:gap-2">
                <h3 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none max-sm:text-2xl">
                  longs
                </h3>
                <span className="text-[#6529E0] font-gilroy text-2xl leading-none max-sm:text-xs">with AI</span>
              </div>
              <div className="flex gap-5 items-center  max-sm:gap-2">
              <span className="text-white font-gilroy text-2xl leading-none  max-sm:text-xs">to</span>
                <h3 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none max-sm:text-2xl">
                clips
                </h3>
              </div>
            </div>
            <p className="font-gilroy text-2xl text-center mt-8 max-sm:text-base">
            Generate Clips from Long form video on autopilot
            </p>
          </div>
          <div className="bg-[#20133E] pt-5 px-5 flex flex-col">
            <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none max-sm:text-2xl">
            feed curated <br className='hidden max-sm:inline'/> by ai
            </h3>
            <p className="font-gilroy text-2xl mt-5 text-center px-5 max-sm:text-base max-sm:mt-2">
            Fine-tune / tailor your feed for mindful content consumption
            </p>
            <div className='my-auto pt-9 max-sm:pt-4 max-sm:pb-4'>
                <img loading="lazy" src={imgFeed} alt="imgFeed" className='w-full object-contain' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
