import {HeroButton} from '../HeroButton';
import {SliderAppMobile} from '../SliderAppMobile';
import style from './SectionHero.module.scss';

export const SectionHero = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900000); // 10 minutes timer
  return (
    <section className='mt-20 max-sm:mt-[50px]'>
      <div className="container justify-center flex pt-[50px] max-sm:pt-[40px]">
        <div className="inline-flex flex-col">
          <p className="text-justify font-gilroy leading-none after:inline-block after:w-full text-white text-2xl max-sm:text-xs font-normal uppercase tracking-[.6em] max-sm:tracking-[.3em]">
            Flagship Social Media Platform
          </p>
          <h1 className={`${style['main-title']}`}>
            NIMBL.TV
            <h1 className={`${style['main-text-layer']}`}>NIMBL.TV</h1>
          </h1>
        </div>
      </div>
      <SliderAppMobile />
      <div className="flex justify-center mt-11">
        <HeroButton>
          <p className="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p>
        </HeroButton>
      </div>
      {/* <TimerBlock expiryTimestamp={time} /> */}
    </section>
  );
};

/* 'text-center font-rfdewi inline-block bg-clip-text text-white text-[145px] leading-none font-black uppercase -translate-y-7' */
