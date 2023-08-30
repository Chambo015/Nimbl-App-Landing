import React from 'react';
import levelXP from '@/assets/levelXP.png';
import levelXPWebp from '@/assets/levelXP.webp';
import imgGroup from '@/assets/GroupCreators.png';
import {creater1, creater10, creater11, creater12, creater13, creater14, creater15, creater16, creater17, creater18, creater2, creater3, creater4, creater5, creater6, creater7, creater8, creater9} from '@/assets/creaters';
import imgCoin from '@/assets/coin.png'
import imgGlass from '@/assets/glass.png'
import imgCircle from '@/assets/circle.png'

export const SectionCreateUsers = () => {
  return (
    <section className="pt-[140px] relative">
      <div className="bg-[linear-gradient(135deg,#C031FA_0%,#6529E0_100%)] mx-auto w-[181px] relative z-10 -mb-20 h-[324px] max-sm:h-[220px] max-sm:w-[123px] rounded-[175px] border-2 border-[#7351C8] overflow-hidden flex justify-center items-center flex-col gap-2 py-3">
        <div className="w-[85px] max-sm:w-[57px]">
          <div className="bg-[rgba(217,217,217,.2)] font-tt-octosquares text-2xl leading-none py-1 text-center max-sm:text-base">
            level
          </div>
          <div className="bg-[rgba(51,51,51,.5)] font-TTOctos text-[28px] leading-none text-center py-2 max-sm:text-lg">10</div>
        </div>
       <picture><source srcSet={levelXPWebp} type="image/webp" /><img loading="lazy" src={levelXP} alt="levelXP"  className='max-sm:h-[95px]'/></picture>
      </div>
      <div className="[clip-path:polygon(25%_0,75%_0,100%_50%,100%_100%,0_100%,0%_50%)] max-sm:[clip-path:polygon(40%_0,60%_0,100%_20%,100%_100%,0_100%,0%_20%)] flex flex-col items-center pt-[120px] bg-[#20133E] w-full h-[570px] relative overflow-visible max-sm:h-[500px]">
        <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mx-auto w-[590px] text-5xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:w-[80%]">
          Create/Engage and Earn
        </h2>
        <p className="text-center font-gilroy text-2xl mt-6 text-white max-sm:text-base max-sm:w-[90%]">
          No complex crypto ponzienomics, simply <span className="text-[#6529E0]">rewarding</span> our early creators
          and users
        </p>
        <img loading="lazy" src={imgGroup} alt="imgGroup" className="w-[400px] mt-auto max-sm:w-[90%]" />
        <img loading="lazy" src={creater1} alt="creator1" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[20%] top-[10%] z-20'/>
        <img loading="lazy" src={creater2} alt="creator2" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[13%] top-[20%] z-20  max-sm:left-[5%] max-sm:top-[18%]'/>
        <img loading="lazy" src={creater3} alt="creator3" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[30%] top-[8%] z-20 '/>
        <img loading="lazy" src={creater4} alt="creator4" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[10%] top-[38%] z-20 max-sm:left-[25%] max-sm:top-[15%]'/>
        <img loading="lazy" src={creater5} alt="creator5" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[17%] top-[40%] z-20 max-sm:left-[15%] max-sm:top-[16%]'/>
        <img loading="lazy" src={creater6} alt="creator6" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[22%] top-[50%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater7} alt="creator7" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[10%] top-[60%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater8} alt="creator8" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[16%] top-[65%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater9} alt="creator9" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[25%] top-[72%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater10} alt="creator10" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[25%] top-[72%] z-20 max-sm:right-[15%]  max-sm:top-[15%]'/>
        <img loading="lazy" src={creater11} alt="creator11" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[15%] top-[60%] z-20 max-sm:right-[5%]  max-sm:top-[18%]'/>
        <img loading="lazy" src={creater12} alt="creator12" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[5%] top-[70%] z-20 max-sm:right-[35%]  max-sm:top-[16%]'/>
        <img loading="lazy" src={creater13} alt="creator13" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[8%] top-[50%] z-20 max-sm:right-[23%]  max-sm:top-[18%]'/>
        <img loading="lazy" src={creater14} alt="creator14" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[25%] top-[10%] z-20 '/>
        <img loading="lazy" src={creater15} alt="creator15" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[17%] top-[22%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater16} alt="creator16" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[18%] top-[40%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater17} alt="creator17" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[18%] top-[80%] z-20 max-sm:hidden'/>
        <img loading="lazy" src={creater18} alt="creator18" className='w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[10%] top-[83%] z-20 max-sm:hidden'/>
        
      </div>
      <img loading="lazy" src={imgCoin} alt="imgCoin" className='w-[136px] h-[136px] object-contain absolute right-[20px] top-[440px] z-20 max-sm:-right-[10px]  max-sm:top-[520px] max-sm:w-[72px] max-sm:h-[72px]' />
      <img loading="lazy" src={imgGlass} alt="imgGlass" className='w-[129px] h-[129px] object-contain absolute right-[20px] -bottom-[44px] z-20 max-sm:w-[72px] max-sm:h-[72px] max-sm:right-0 max-sm:-left-[20px]  max-sm:top-[620px]' />
      <img loading="lazy" src={imgCoin} alt="imgCoin" className='w-[112px] h-[112px] object-contain absolute left-[30px] -bottom-[40px] z-20 max-sm:hidden' />
      <img loading="lazy" src={imgCircle} alt="imgCircle" className='w-[75px] h-[75px] object-contain absolute left-[50px] top-[500px] z-20 max-sm:hidden' />
    </section>
  );
};
