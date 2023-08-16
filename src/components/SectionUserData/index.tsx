import React from 'react';
import logo from '@/assets/logo.png';
import {CheckSolid} from '../icons/CheckSolid';
import { LockIcon } from '../icons/LockIcon';

export const SectionUserData = () => {
  return (
    <section className="pt-52">
      <div className="container flex justify-between items-center">
        <div className='flex-shrink-0'>
          <span className="text-[#0061F0]  text-2xl font-medium font-gilroy py-1 px-2 bg-sky-950 border border-blue-800">
            Privacy and Personalization
          </span>
          <h2 className="w-[570px] mt-5 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi">
            Decentralizing <span className="whitespace-nowrap">the user-data</span>
          </h2>
          <p className="font-gilroy w-[560px] mt-5 text-white/80 text-2xl font-normal">
            Utilizing Zero-Knowledge Proofs, Nimbl provides a personalized social media experience, while ensuring your
            personal data remains confidential
          </p>
        </div>
        <div className='flex items-center'>
          <LockIcon />
          <div className='w-32 -mr-2 -ml-3 relative -z-10 h-3 bg-[rgba(211,211,211,.08)] border border-neutral-600/30'></div>
          <div className="bg-indigo-950 w-[240px] relative z-10">
            <div className="p-5">
              <img src={logo} alt="logo" className='w-[85px] h-[31px] object-contain mb-8'/>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy">Usernames</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy">Passwords</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy">Wallet</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <CheckSolid />
                <p className="text-white text-xl font-medium font-gilroy">History</p>
              </div>
            </div>
            <div className='h-10 bg-[#001D48] flex items-center justify-center border border-blue-800'><p className='text-center text-white/70 font-gilroy text-xl font-medium'>100+ Dates</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};
