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
      <div className="container pt-[200px]">
        <div className="grid-cols-2 gap-10 grid grid-rows-2">
          <div className="bg-[#20133E] pt-5 px-10">
            <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none">
              ai powered search
            </h3>
            <p className="font-gilroy text-2xl mt-6">
              Effortless content discovery powered by our AI's deep understanding of video narratives
            </p>
            <div className="mt-10">
              <img src={imgMobileGpt} alt="imgMobileGpt" className="w-[290px] object-contain mx-auto" />
            </div>
          </div>
          <div className="bg-[#20133E] pt-5 flex flex-col">
            <div className="px-10">
              <p className="text-center text-white text-2xl font-normal uppercase tracking-[14.64px] font-gilroy">
                translate video
              </p>
              <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none mt-3">
                into 40 languages
              </h3>
              <div className="flex gap-5 justify-around mt-9">
                <img src={iconUK} alt="iconUK" />
                <img src={iconChina} alt="iconChina" />
                <img src={iconFrance} alt="iconFrance" />
                <img src={iconGermany} alt="iconGermany" />
                <img src={iconIndia} alt="iconIndia" />
                <img src={iconItaly} alt="iconItaly" />
                <img src={iconKorea} alt="iconKorea" />
                <img src={iconSweden} alt="iconSweden" />
                <img src={iconSwitzerland} alt="iconSwitzerland" />
                <img src={iconUS} alt="iconUS" />
                <img src={iconTurkey} alt="iconTurkey" />
              </div>
            </div>
            <div className="pt-10 mt-auto">
              <img src={imglaunguages} alt="imgMobileGpt" className="w-full h-[260px] object-cover" />
            </div>
          </div>
          <div className="bg-[#20133E] pt-5 px-10">
            <div className='flex flex-col justify-center items-center'>
              <div className="flex gap-5 items-center">
                <h3 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none">
                  longs
                </h3>
                <span className="text-[#6529E0] font-gilroy text-2xl leading-none">with AI</span>
              </div>
              <div className="flex gap-5 items-center">
              <span className="text-white font-gilroy text-2xl leading-none">to</span>
                <h3 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none">
                clips
                </h3>
              </div>
            </div>
            <p className="font-gilroy text-2xl text-center mt-8">
            Generate Clips from Long form video on autopilot
            </p>
          </div>
          <div className="bg-[#20133E] pt-5 px-5 flex flex-col">
            <h3 className="text-center bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] font-black uppercase font-rfdewi leading-none">
            feed curated by ai
            </h3>
            <p className="font-gilroy text-2xl mt-5 text-center px-5">
            Fine-tune / tailor your feed for mindful content consumption
            </p>
            <div className='my-auto pt-9'>
                <img src={imgFeed} alt="imgFeed" className='w-full object-contain' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
