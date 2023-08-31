import { useLayoutEffect, useRef} from 'react'
import monitorImgLarge from '@/assets/monitor-large.png';
import monitorImgLargeWebp from '@/assets/monitor-large.webp';
import VerticalSlider from './VerticalSlider';
import {gsap} from 'gsap';

export const SectionChannelsTokenized = () => {
  const refLeftCol = useRef<HTMLDivElement | null>(null);
  const refSection = useRef<HTMLDivElement | null>(null);
  const refRightCol = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    const ctx = gsap.context(() => {
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.from(refLeftCol.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refLeftCol.current, // trigger по какому элементу отслеживать скролл
          start: 'top 85%', // start анимации относительно триггер элемент и viewport
          end: 'top 20%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        x: -200,
        duration: 3,
        force3D: true,
      });
      gsap.from(refRightCol.current, {
        // from Из этого состояния в обычное
        scrollTrigger: {
          trigger: refRightCol.current, // trigger по какому элементу отслеживать скролл
          start: 'top 90%', // start анимации относительно триггер элемент и viewport
          end: 'top 50%', // конец анимации относительно триггер элемента и viewport
          scrub: 1.9, // scrub будет анимация идти в обратном порядке
        },
        opacity: 0,
        x: 200,
        duration: 3,
        force3D: true,
      });
    }, refSection); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, []); 
  return (
    <section ref={refSection} className='pt-[200px] max-sm:pt-[50px]'>
      <div className="flex justify-center px-4 gap-9 max-sm:flex-col">
        <div ref={refLeftCol} className=' flex flex-col items-start justify-center max-sm:items-center'>
          <span className="text-[#0061F0] text-2xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table ">
            Stake’s Utility
          </span>
          <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl mt-6 max-sm:text-center">
            Nimbl Channels <br/>Tokenized
          </h2>
          <div className='h-[200px] w-[500px] mt-16 max-sm:w-full max-sm:h-[90px] max-sm:mt-5'>
            <VerticalSlider loop length={12} width={400} perspective='center'   />
          </div>
        </div>
        <div ref={refRightCol}>
          <picture><source srcSet={monitorImgLargeWebp} type="image/webp" /><img src={monitorImgLarge} alt="monitorImgLarge" className=' object-bottom object-contain' /></picture>
        </div>
      </div>
    </section>
  );
};
