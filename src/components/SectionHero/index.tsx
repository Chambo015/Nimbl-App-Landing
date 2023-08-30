import {useEffect, useRef} from 'react';
import {HeroButton} from '../HeroButton';
import {SliderAppMobile} from '../SliderAppMobile';
import style from './SectionHero.module.scss';
import lightImg from '@/assets/light.png';
import lightImgWebp from '@/assets/light.webp';
import {gsap} from 'gsap';

export const SectionHero = () => {
  /*  const time = new Date();
  time.setSeconds(time.getSeconds() + 900000); */ // 10 minutes timer

  const refTitle = useRef<HTMLDivElement | null>(null);
  const refSlider = useRef<HTMLDivElement | null>(null);
  const refLight = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(refTitle.current, {yPercent: -100, autoAlpha: 0}, {delay: 1, duration: 1, yPercent: 0, autoAlpha: 1});
    tl.fromTo(refSlider.current, {autoAlpha: 0}, {duration: 1.5, autoAlpha: 1}, '<0.5');
    tl.fromTo(refLight.current, {autoAlpha: 0}, {duration: 1.5, autoAlpha: 1}, '<1');
  }, []);
  return (
    <section className="mt-20 max-sm:mt-[50px] relative">
      <picture>
      <source srcSet={lightImgWebp} type="image/webp" />
        <img
          ref={refLight}
          src={lightImg}
          alt="lightImg"
          loading="lazy"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none"
        />
      </picture>
      <div className="container justify-center flex pt-[50px] max-sm:pt-[40px]">
        <div ref={refTitle} className="inline-flex flex-col">
          <p className="text-justify font-gilroy leading-none after:inline-block after:w-full text-white text-2xl max-sm:text-xs font-normal uppercase tracking-[.6em] max-sm:tracking-[.3em]">
            Flagship Social Media Platform
          </p>
          <h1 className={`${style['main-title']}`}>
            NIMBL.TV
            <h1 className={`${style['main-text-layer']}`}>NIMBL.TV</h1>
          </h1>
        </div>
      </div>
      <div ref={refSlider}>
        <SliderAppMobile />
      </div>
      <div className="flex justify-center mt-11 gap-8 max-sm:flex-col items-center">
        <HeroButton className="max-sm:!w-[85%]">
          <p className="font-rfdewi text-xl max-sm:text-sm font-bold">APPLY FOR CLOSED BETA</p>
        </HeroButton>
        <HeroButton regular className="max-sm:!w-[85%]">
          <p className="font-rfdewi text-xl max-sm:text-sm font-bold uppercase">Launch Desktop Demo App</p>
        </HeroButton>
      </div>
      {/* <TimerBlock expiryTimestamp={time} /> */}
    </section>
  );
};

/* 'text-center font-rfdewi inline-block bg-clip-text text-white text-[145px] leading-none font-black uppercase -translate-y-7' */
