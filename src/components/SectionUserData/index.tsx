import React from 'react';
import logo from '@/assets/logo.png';
import {CheckSolid} from '../icons/CheckSolid';
import {LockIcon} from '../icons/LockIcon';
import imgBg from '@/assets/db-bg.png';

export const SectionUserData = () => {
  return (
    <section className="">
      <div className="flex justify-center -mb-[250px] max-sm:-mb-[70px]">
        <img src={imgBg} alt="imgBg" className="w-[1920px] max-sm:max-w-[150%] object-contain mix-blend-lighten" />
      </div>
      <div className="container flex justify-between items-center max-sm:flex-col max-sm:gap-7">
        <div className="flex-shrink-0">
          <span className="text-[#0061F0] text-2xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table ">
            Powered by Lens
          </span>
          <h2 className="w-[570px] mt-5 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi max-sm:text-2xl max-sm:w-full leading-none max-sm:text-center">
            Decentralizing <span className="whitespace-nowrap">the user-data</span>
          </h2>
          <p className="font-gilroy w-[560px] mt-5 text-white/80 text-2xl font-normal max-sm:text-sm max-sm:w-full max-sm:text-center">
            Utilizing Zero-Knowledge Proofs, Nimbl provides a personalized social media experience, while ensuring your
            personal data remains confidential
          </p>
        </div>
        <div className="flex items-center">
          <LockIcon />
          <div className="w-32 max-sm:w-20 -mr-2 -ml-3 relative -z-10 h-3 bg-[rgba(211,211,211,.08)] border border-neutral-600/30"></div>
          <div className="bg-indigo-950 w-[240px] max-sm:w-[172px] relative z-10">
            <div className="p-5 max-sm:p-4">
              <img src={logo} alt="logo" className="w-[85px] h-[31px] object-contain mb-8 max-sm:mb-4" />
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy max-sm:text-sm">Usernames</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy max-sm:text-sm">Passwords</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy max-sm:text-sm">Wallet</p>
              </div>
              <div className="flex items-center gap-4 mb-6 max-sm:mb-0">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy max-sm:text-sm">History</p>
              </div>
            </div>
            <div className="h-10 bg-[#001D48] flex items-center justify-center border border-blue-800">
              <p className="text-center text-white/70 font-gilroy text-xl font-medium max-sm:text-sm">100+ Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
