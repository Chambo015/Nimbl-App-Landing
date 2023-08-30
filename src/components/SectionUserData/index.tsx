import {useRef, useLayoutEffect} from 'react';
import logo from '@/assets/logo.png';
import {CheckSolid} from '../icons/CheckSolid';
import {LockIcon} from '../icons/LockIcon';
import imgBg from '@/assets/db-bg.png';
import imgBgWebp from '@/assets/db-bg.webp';
import './styles.scss';
import {gsap} from "gsap";

export const SectionUserData = () => {
  const refImgBg = useRef<HTMLElement | null>(null);
  const refSection = useRef<HTMLElement | null>(null);
  const refTitle = useRef<HTMLElement | null>(null);
  const refText = useRef<HTMLElement | null>(null);
  const refRightCol = useRef<HTMLElement | null>(null);
  const refSubTitle = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.from(refImgBg.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refImgBg.current, // trigger по какому элементу отслеживать скролл
          start: 'center 60%', // start анимации относительно триггер элемент и viewport
          end: 'bottom 30%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        force3D: true,
      });
      gsap.from(refTitle.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refTitle.current, // trigger по какому элементу отслеживать скролл
          start: 'center 80%', // start анимации относительно триггер элемент и viewport
          end: 'top 20%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        x: -200,
        duration: 3,
        force3D: true,
      });
      gsap.from(refSubTitle.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refSubTitle.current, // trigger по какому элементу отслеживать скролл
          start: 'center 80%', // start анимации относительно триггер элемент и viewport
          end: 'top 20%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        force3D: true,
        yPercent: 20,
      });
      gsap.from(refText.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refText.current, // trigger по какому элементу отслеживать скролл
          start: 'center 80%', // start анимации относительно триггер элемент и viewport
          end: 'top center', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        yPercent: 50,
        duration: 2,
        force3D: true,
      });
      gsap.from(refRightCol.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refRightCol.current, // trigger по какому элементу отслеживать скролл
          start: 'center 80%', // start анимации относительно триггер элемент и viewport
          end: 'top center', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        xPercent: 50,
        duration: 2,
        force3D: true,
      });
      
    }, refSection); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
  }, []); 
  return (
    <section ref={refSection} className="">
      <div className="flex justify-center -mb-[250px] max-sm:-mb-[70px]">
        <picture>
        <source srcSet={imgBgWebp} type="image/webp" />
          <img
            ref={refImgBg}
            src={imgBg}
            alt="imgBg"
            className="w-[1920px] max-sm:max-w-[150%] object-contain mix-blend-lighten"
          />
        </picture>
      </div>
      <div className="container flex justify-between items-center max-sm:flex-col max-sm:gap-7">
        <div ref={refSubTitle} className="flex-shrink-0">
          <span  className="text-[#0061F0] text-2xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table ">
            Powered by Lens
          </span>
          <h2
            ref={refTitle}
            className="w-[570px] mt-5 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi max-sm:text-2xl max-sm:w-full leading-none max-sm:text-center">
            Decentralizing <span className="whitespace-nowrap">the user-data</span>
          </h2>
          <p ref={refText} className="font-gilroy w-[560px] mt-5 text-white/80 text-2xl font-normal max-sm:text-sm max-sm:w-full max-sm:text-center">
            Utilizing Zero-Knowledge Proofs, Nimbl provides a personalized social media experience, while ensuring your
            personal data remains confidential
          </p>
        </div>
        <div ref={refRightCol} className="flex items-center">
          <LockIcon />
          <div className="w-32 max-sm:w-20 -mr-2 -ml-3 relative -z-10 h-3 bg-[rgba(211,211,211,.08)] border border-neutral-600/30 overflow-hidden">
            <ul className="round-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
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
