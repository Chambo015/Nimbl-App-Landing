import {useRef, useLayoutEffect, useEffect} from 'react';
import {WebClaimYourHandle} from '../icons/WebClaimYourHandle';
import radarIcon from '@/assets/radar-icon.png';
import radarIconWebp from '@/assets/radar-icon.webp';
import {HeroButton} from '../HeroButton';
import user1 from '@/assets/user1.png';
import user2 from '@/assets/user2.png';
import user3 from '@/assets/user3.png';
import user4 from '@/assets/user4.png';
import user4Prime from '@/assets/user4-prime.png';
import user3Prime from '@/assets/user3-prime.png';
import user2Prime from '@/assets/user2-prime.png';
import user1Prime from '@/assets/user1-prime.png';
import {gsap} from 'gsap';

export const SectionClaim = () => {
  const refSection = useRef<HTMLElement | null>(null);
  const refImg2 = useRef<HTMLDivElement | null>(null);
  const refImg3 = useRef<HTMLDivElement | null>(null);
  const refImg5 = useRef<HTMLDivElement | null>(null);
  const refImg4 = useRef<HTMLDivElement | null>(null);

  const refImg2Prime = useRef<HTMLDivElement | null>(null);
  const refImg3Prime = useRef<HTMLDivElement | null>(null);
  const refImg5Prime = useRef<HTMLDivElement | null>(null);
  const refImg4Prime = useRef<HTMLDivElement | null>(null);

  const tl1 = useRef<gsap.core.Timeline>();
  const tl2 = useRef<gsap.core.Timeline>();
  const tl3 = useRef<gsap.core.Timeline>();
  const tl4 = useRef<gsap.core.Timeline>();


  useEffect(() => {
    tl1.current = gsap.timeline({repeat: -1});
    tl1.current.to(refImg2.current, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5});
    tl1.current.fromTo(
      refImg5Prime.current,
      {x: 0, autoAlpha: 0, scale: 0.5, y: 200},
      {x: 850, autoAlpha: 1, duration: 5, scale: 1, y: 0},
      '<.2'
    );

    tl2.current = gsap.timeline({repeat: -1});
    tl2.current.to(refImg3.current, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5});
    tl2.current.fromTo(
      refImg4Prime.current,
      {x: 0, autoAlpha: 0, scale: 0.5, y: 50},
      {x: 700, autoAlpha: 1, duration: 4, scale: 1, y: 0},
      '<.2'
    );
 
    tl3.current = gsap.timeline({repeat: -1});
    tl3.current.to(refImg5.current, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5, y: 300});
    tl3.current.fromTo(
      refImg2Prime.current,
      {x: 0, autoAlpha: 0, scale: 0.5},
      {x: 550, autoAlpha: 1, duration: 3, scale: 1},
      '<.2'
    );

    tl4.current = gsap.timeline({repeat: -1});
    tl4.current.to(refImg4.current, {x: 0, autoAlpha: 0, duration: 3.5, scale: 0.5, y: 100});
    tl4.current.fromTo(
      refImg3Prime.current,
      {x: 0, autoAlpha: 0, scale: 0.5},
      {x: 650, autoAlpha: 1, duration: 4, y: 100, scale: 1},
      '<.2'
    ); 
    return () => {
      tl1.current?.kill()
      tl2.current?.kill()
      tl3.current?.kill()
      tl4.current?.kill()
    }
  }, []);
  return (
    <section ref={refSection} className="relative flex justify-center">
      <div>
        <WebClaimYourHandle />
      </div>
      <picture>
        <source srcSet={radarIconWebp} type="image/webp" />
        <img
          loading="lazy"
          src={radarIcon}
          alt="radarIcon"
          className="w-[112px] h-[112px] absolute left-1/2 -translate-x-1/2 bottom-[30%] max-sm:w-[54px] max-sm:h-[54px] max-sm:bottom-[28%]"
        />
      </picture>
      <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-20 text-5xl font-rfdewi font-black uppercase absolute top-[30%] max-sm:top-[10%]  max-sm:text-2xl">
        Claim Your Handle
      </h2>
      <div className="flex justify-center absolute left-1/2 bottom-[10%] -translate-x-1/2 max-sm:bottom-[0%]">
        <HeroButton>
          <p className="font-rfdewi text-2xl font-bold max-sm:text-sm">DOWNLOAD APP</p>
        </HeroButton>
      </div>
      <div
        ref={refImg5}
        className="bg-[#20133E] pb-3 px-[5px] absolute left-[50%] -translate-x-[850px] top-[30%] rounded-md pt-7 max-sm:-translate-x-[100px] max-sm:top-[58%] max-sm:pt-2 max-sm:pb-1">
        <img
          loading="lazy"
          src={user1}
          alt="user1"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@diasnkteam</p>
      </div>
      <div
        ref={refImg4}
        className="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[700px]  top-[50%] rounded-md pt-7">
        <img
          loading="lazy"
          src={user2}
          alt="user2"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5"
        />
        <p className="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@adilkhan.r</p>
      </div>
      <div
        ref={refImg3}
        className="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[500px] top-[65%] rounded-md pt-7">
        <img
          loading="lazy"
          src={user3}
          alt="user3"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5"
        />
        <p className="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@kairkuka</p>
      </div>
      <div
        ref={refImg2}
        className="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[250px] top-[60%] rounded-md pt-7 max-sm:-translate-x-[180px] max-sm:top-[60%] max-sm:pt-2 max-sm:pb-1">
        <img
          loading="lazy"
          src={user4}
          alt="user4"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@buman</p>
      </div>
      <div
        ref={refImg5Prime}
        className="bg-[#20133E] pb-3 px-[7px] absolute right-[50%]   top-[40%] rounded-md pt-7 max-sm:translate-x-[180px] max-sm:top-[61%] max-sm:pt-2 max-sm:pb-1">
        <img
          loading="lazy"
          src={user4Prime}
          alt="user4Prime"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@buman</p>
      </div>
      <div ref={refImg4Prime} className="bg-[#20133E] pb-3 px-[7px] absolute right-[50%]  top-[55%] rounded-md pt-7">
        <img
          loading="lazy"
          src={user3Prime}
          alt="user3Prime"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5"
        />
        <p className="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@kairkuka</p>
      </div>
      <div ref={refImg3Prime} className="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[65%] rounded-md pt-7">
        <img
          loading="lazy"
          src={user2Prime}
          alt="user2Prime"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5"
        />
        <p className="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@adilkhan.r</p>
      </div>
      <div
        ref={refImg2Prime}
        className="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[62%] rounded-md pt-7 max-sm:translate-x-[100px] max-sm:top-[54%] max-sm:pt-2 max-sm:pb-1">
        <img
          loading="lazy"
          src={user1Prime}
          alt="user1Prime"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@diasnkteam</p>
      </div>
    </section>
  );
};
