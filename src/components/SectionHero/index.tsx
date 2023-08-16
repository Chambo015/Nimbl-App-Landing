import { SliderAppMobile } from '../SliderAppMobile';
import { TimerBlock } from '../TimerBlock';
import style from './SectionHero.module.scss';

export const SectionHero = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900000); // 10 minutes timer
  return (
    <section>
      <div className="container justify-center flex pt-[50px]">
        <div className="inline-flex flex-col">
          <p className="text-justify lin font-gilroy leading-none after:inline-block after:w-full text-white text-2xl font-normal uppercase tracking-[.6em]">
            Flagship Social Media Platform
          </p>
          <h1
            className={`${style['main-title']}`}>
            NIMBL.TV
            <h1  className={`${style['main-text-layer']}`}>NIMBL.TV</h1>
          </h1>
        </div>
      </div>
      <SliderAppMobile />
      <TimerBlock expiryTimestamp={time} />
    </section>
  );
};


/* 'text-center font-rfdewi inline-block bg-clip-text text-white text-[145px] leading-none font-black uppercase -translate-y-7' */