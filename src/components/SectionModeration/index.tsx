import {useLayoutEffect, useRef} from 'react';
import radarImg from '@/assets/bg-radar.png';
import radarImgWebp from '@/assets/bg-radar.webp';
import radarIcon from '@/assets/radar-icon.png';
import radarIconWebp from '@/assets/radar-icon.webp';
import {BlockIcon} from '../icons/BlockIcon';
import {SearchIcon} from '../icons/SearchIcon';
import {UserSearchIcon} from '../icons/UserSearchIcon';
import './styles.scss';
import {gsap} from 'gsap';

export const SectionModeration = () => {
  const refRadar = useRef<HTMLImageElement | null>(null);
  const refSection = useRef<HTMLDivElement | null>(null);
  const refTitle = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    const ctx = gsap.context(() => {
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.from(refRadar.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refRadar.current, // trigger по какому элементу отслеживать скролл
          start: 'top 85%', // start анимации относительно триггер элемент и viewport
          end: 'top 20%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        force3D: true,
      });
      gsap.from(refTitle.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refTitle.current, // trigger по какому элементу отслеживать скролл
          start: 'top 90%', // start анимации относительно триггер элемент и viewport
          end: 'top 50%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        y: 200,
        duration: 3,
        force3D: true,
      });
    }, refSection); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, []); 
  return (
    <section ref={refSection} className="pt-[200px]">
      <div className="container relative">
        <div  className="relative overflow-hidden rounded-tl-[1000px] rounded-tr-[1000px]">
          <picture >
            <source srcSet={radarImgWebp} type="image/webp" />
            <img ref={refRadar} src={radarImg} alt="radarImg" className="w-full object-contain mix-blend-lighten" />
          </picture>
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
        <picture>
          <source srcSet={radarIconWebp} type="image/webp" />
          <img
            src={radarIcon}
            alt="radarIcon"
            className="w-[112px] h-[112px] max-sm:w-[54px] max-sm:h-[54px] max-sm:-mt-[30px] mx-auto -mt-[56px] z-10 relative"
          />
        </picture>
       <div ref={refTitle}>
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
      </div>
    </section>
  );
};
