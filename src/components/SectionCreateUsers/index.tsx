import React from 'react';
import levelXP from '@/assets/levelXP.png';
import imgGroup from '@/assets/GroupCreators.png';
import {creater1, creater10, creater11, creater12, creater13, creater14, creater15, creater16, creater17, creater18, creater2, creater3, creater4, creater5, creater6, creater7, creater8, creater9} from '@/assets/creaters';
import imgCoin from '@/assets/coin.png'
import imgGlass from '@/assets/glass.png'
import imgCircle from '@/assets/circle.png'

export const SectionCreateUsers = () => {
  return (
    <section className="pt-[140px] relative">
      <div className="bg-[linear-gradient(135deg,#C031FA_0%,#6529E0_100%)] mx-auto w-[181px] relative z-10 -mb-20 h-[324px] rounded-[175px] border-2 border-[#7351C8] overflow-hidden flex justify-center items-center flex-col gap-2 py-3">
        <div className="w-[85px]">
          <div className="bg-[rgba(217,217,217,.2)] font-tt-octosquares text-2xl leading-none py-1 text-center">
            level
          </div>
          <div className="bg-[rgba(51,51,51,.5)] font-TTOctos text-[28px] leading-none text-center py-2">10</div>
        </div>
        <img src={levelXP} alt="levelXP" />
      </div>
      <div className="[clip-path:polygon(25%_0,75%_0,100%_50%,100%_100%,0_100%,0%_50%)] flex flex-col items-center pt-[120px] bg-[#20133E] w-full h-[570px] relative overflow-visible">
        <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mx-auto w-[590px] text-5xl font-rfdewi font-black uppercase">
          Create/Engage and Earn
        </h2>
        <p className="text-center font-gilroy text-2xl mt-6 text-white">
          No complex crypto ponzienomics, simply <span className="text-[#6529E0]">rewarding</span> our early creators
          and users
        </p>
        <img src={imgGroup} alt="imgGroup" className="w-[400px] mt-auto" />

        <img src={creater1} alt="creator1" className='w-[80px] h-[80px] absolute left-[20%] top-[10%] z-20'/>
        <img src={creater2} alt="creator2" className='w-[80px] h-[80px] absolute left-[13%] top-[20%] z-20'/>
        <img src={creater3} alt="creator3" className='w-[80px] h-[80px] absolute left-[30%] top-[8%] z-20'/>
        <img src={creater4} alt="creator4" className='w-[80px] h-[80px] absolute left-[10%] top-[38%] z-20'/>
        <img src={creater5} alt="creator5" className='w-[80px] h-[80px] absolute left-[17%] top-[40%] z-20'/>
        <img src={creater6} alt="creator6" className='w-[80px] h-[80px] absolute left-[22%] top-[50%] z-20'/>
        <img src={creater7} alt="creator7" className='w-[80px] h-[80px] absolute left-[10%] top-[60%] z-20'/>
        <img src={creater8} alt="creator8" className='w-[80px] h-[80px] absolute left-[16%] top-[65%] z-20'/>
        <img src={creater9} alt="creator9" className='w-[80px] h-[80px] absolute left-[25%] top-[72%] z-20'/>
        <img src={creater10} alt="creator10" className='w-[80px] h-[80px] absolute right-[25%] top-[72%] z-20'/>
        <img src={creater11} alt="creator11" className='w-[80px] h-[80px] absolute right-[15%] top-[60%] z-20'/>
        <img src={creater12} alt="creator12" className='w-[80px] h-[80px] absolute right-[5%] top-[70%] z-20'/>
        <img src={creater13} alt="creator13" className='w-[80px] h-[80px] absolute right-[8%] top-[50%] z-20'/>
        <img src={creater14} alt="creator14" className='w-[80px] h-[80px] absolute right-[25%] top-[10%] z-20'/>
        <img src={creater15} alt="creator15" className='w-[80px] h-[80px] absolute right-[17%] top-[22%] z-20'/>
        <img src={creater16} alt="creator16" className='w-[80px] h-[80px] absolute right-[18%] top-[40%] z-20'/>
        <img src={creater17} alt="creator17" className='w-[80px] h-[80px] absolute right-[18%] top-[80%] z-20'/>
        <img src={creater18} alt="creator18" className='w-[80px] h-[80px] absolute right-[10%] top-[83%] z-20'/>
        
      </div>
      <img src={imgCoin} alt="imgCoin" className='w-[136px] h-[136px] object-contain absolute right-[20px] top-[440px] z-20' />
      <img src={imgGlass} alt="imgGlass" className='w-[129px] h-[129px] object-contain absolute right-[20px] -bottom-[44px] z-20' />
      <img src={imgCoin} alt="imgCoin" className='w-[112px] h-[112px] object-contain absolute left-[30px] -bottom-[40px] z-20' />
      <img src={imgCircle} alt="imgCircle" className='w-[75px] h-[75px] object-contain absolute left-[50px] top-[500px] z-20' />
    </section>
  );
};
