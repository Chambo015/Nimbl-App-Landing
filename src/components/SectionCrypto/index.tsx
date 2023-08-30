import {FC} from 'react';
import imgMobile from '@/assets/Screen_crypto.png'
import imgMobileWebp from '@/assets/Screen_crypto.webp'
import imgMobileSm from '@/assets/Screen_crypto-sm.png'
import bgGradient from '@/assets/gradient-background-crypto.png'
import bgGradientWebp from '@/assets/gradient-background-crypto.webp'
import imgCard from '@/assets/business-card.png'
import imgCardWebp from '@/assets/business-card.webp'
import { HeroButton } from '../HeroButton';
interface Props {
  openModalVideo: () => void
}

export const SectionCrypto: FC<Props> = ({openModalVideo}) => {
  return (
    <section className="bg-[#0F0722] relative max-sm:mt-5">
      <picture ><source srcSet={bgGradientWebp} type="image/webp"  /><img  src={bgGradient} alt="bgGradient" className='absolute inset-0 z-0 w-full h-full' loading="lazy" /></picture>
      <div className="container flex items-center z-10">
        <div className="flex pt-[90px] justify-between w-full max-sm:pt-5">
          <div className='flex flex-col '>
            <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl">
              in-app<br className='max-sm:hidden'/> crypto transfers
            </h2>
            <p className="text-white text-2xl font-normal w-[660px] font-gilroy mt-6 max-sm:text-base max-sm:w-full">
              Send <span className='text-[#6529E0]'>$NIMBL </span>to your friend’s username in a few easy taps. Sign transactions with your fingerprint or
              face-id.
            </p>
           <div className='-mb-20 mt-7 hidden max-sm:block'> <HeroButton xs  onClick={openModalVideo}><p className="font-rfdewi text-xs font-bold uppercase max-sm:text-[10px] leading-none">See it in Action</p></HeroButton></div>
            <div className='mt-auto max-sm:mt-7 gap-20 flex max-sm:items-end max-sm:gap-3 max-sm:justify-between'>
              <picture><source srcSet={imgCardWebp} type="image/webp" /><img src={imgCard} alt="imgCard" className='w-[355px] max-sm:w-[163px]' loading="lazy" /></picture>
              <img src={imgMobileSm} alt="imgMobileSm" className='hidden max-sm:block' loading="lazy" />
              <div className='max-sm:hidden'> <HeroButton onClick={openModalVideo} xs><p className="font-rfdewi text-xs font-bold uppercase max-sm:text-[10px] leading-none">See it in Action</p></HeroButton></div>
            </div>
          </div>
          <div>
           <picture><source srcSet={imgMobileWebp} type="image/webp" /><img src={imgMobile} alt="imgMobile" className='max-sm:hidden' loading="lazy" /></picture>
          </div>
        </div>
      </div>
    </section>
  );
};
