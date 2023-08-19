import React from 'react';
import VerticalSlider from './VerticalSlider';
import mobileImg from '@/assets/swipe.png';
import swipeLeft from '@/assets/swipe-toFilter.png';
import swipeRight from '@/assets/swipe-toSave.png';

export const SectionSwipe = () => {
  return (
    <section className="pt-32">
      <div className="container flex gap-14 justify-between items-center max-sm:flex-col">
        <div className="w-[400px]">
          <h2 className="bg-gradient-to-b from-white to-white/50 font-rfdewi text-transparent bg-clip-text text-5xl font-black uppercase max-sm:text-2xl max-sm:text-center">
            SWIPE
          </h2>
       {/*    <p className="font-univers font-medium text-2xl mt-2">
            to <span className="text-[#6529E0]">Filter</span> to <span className="text-[#6529E0]">Save</span>
          </p> */}
          <p className="text-2xl text-white/80 mt-8 font-gilroy max-sm:text-base max-sm:text-center max-sm:mt-4">
            Be in control of the content that you receive on feed.
            <span className=" mt-4 block max-sm:inline max-sm:mt-0">Swipe left to filter, swipe right to save</span>
          </p>
        </div>
        <div className="relative">
          <img src={mobileImg} alt="mobileImg" className="w-[442px] h-[744px] max-sm:w-[230px] max-sm:h-[380px] object-contain" />
          <img src={swipeLeft} alt="swipeLeft" className="absolute top-[5%] -left-[40%]" />
          <img src={swipeRight} alt="swipeLeft" className="absolute top-[5%] -right-[40%]" />
        </div>
      </div>
    </section>
  );
};
