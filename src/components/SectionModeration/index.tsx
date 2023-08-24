import React from 'react';
import radarImg from '@/assets/bg-radar.png';
import radarIcon from '@/assets/radar-icon.png';
import {BlockIcon} from '../icons/BlockIcon';
import {SearchIcon} from '../icons/SearchIcon';
import {UserSearchIcon} from '../icons/UserSearchIcon';
import './styles.scss';

export const SectionModeration = () => {
  return (
    <section className="pt-36">
      <div className="container relative">
        <div className="relative overflow-hidden rounded-tl-[1000px] rounded-tr-[1000px]">
          <img src={radarImg} alt="radarImg" className="w-full object-contain mix-blend-lighten" />
          <div></div>
          <div className="scanner"></div>
          <ul className="scanner_points">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img
          src={radarIcon}
          alt="radarIcon"
          className="w-[112px] h-[112px] max-sm:w-[54px] max-sm:h-[54px] max-sm:-mt-[30px] mx-auto -mt-[56px] z-10 relative"
        />
        <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-7 text-5xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:mt-2">
          Redefining Moderation with Transparent AI
        </h2>
        <p className="font-gilroy mt-6 text-center text-white text-2xl font-normal max-sm:text-base">
          Embrace a new era of community governance with our AI-powered moderation system.
        </p>
        <div className="flex justify-between mt-16 max-sm:flex-col max-sm:items-center max-sm:gap-7">
          <div className="w-[280px] flex flex-col  items-center gap-4">
            <BlockIcon />
            <p className=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base ">
              Decisions are guided by clear, open-source guidelines
            </p>
          </div>
          <div className="w-[315px] flex flex-col items-center gap-4">
            <SearchIcon />
            <p className=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base">
              Every instance is committed on-chain, with explanation and post links
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-4">
            <UserSearchIcon />
            <p className=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base">
              Moderation Guidelines developed by Nimbl Collective DAO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
