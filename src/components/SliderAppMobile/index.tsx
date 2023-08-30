import {useEffect, useRef, useState} from 'react';
import './styles.scss';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import screen1 from '@/assets/app-screens/screen-1.png';
import screen2 from '@/assets/app-screens/screen-2.png';
import screen3 from '@/assets/app-screens/screen-3.png';
import screen4 from '@/assets/app-screens/screen-4.png';
import screen5 from '@/assets/app-screens/screen-5.png';
import screen1Webp from '@/assets/app-screens/screen-1-lg.webp';
import screen2Webp from '@/assets/app-screens/screen-2-lg.webp';
import screen3Webp from '@/assets/app-screens/screen-3-lg.webp';
import screen4Webp from '@/assets/app-screens/screen-4-lg.webp';
import screen5Webp from '@/assets/app-screens/screen-5-lg.webp';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import {gsap} from 'gsap';

const styleActiveEl = '!w-[324px] h-[610px] max-sm:w-[225px] max-sm:h-[400px]';

export const SliderAppMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const matches = useMediaQuery('(min-width: 640px)');

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: matches ? 5 : 2,
        spacing: 15,
        origin: 'center',
      },
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          /* slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        }) */
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div ref={ref} className="keen-slider !w-[1530px] max-sm:!w-full items-center relative mx-auto z-10 ">
      <div
        className={`keen-slider__slide items-center flex shrink-0 justify-center     ${
          currentSlide === 0 ? styleActiveEl : 'h-[492px] !w-[264px] max-sm:w-[172px] max-sm:h-[320px]'
        }`}>
        <picture>
          <source srcSet={screen1Webp} type="image/webp" />
          <img
            src={screen1}
            alt="screen1"
            className={currentSlide === 0 ? 'w-[314px] max-sm:w-[204px]' : 'w-[264px] max-sm:w-[172px]'}
          />
        </picture>
      </div>
      <div
        className={`keen-slider__slide  items-center flex shrink-0 justify-center  ${
          currentSlide === 1 ? styleActiveEl : 'h-[492px] max-sm:w-[172px] max-sm:h-[320px] !w-[264px]'
        }`}>
       <picture>
       <source srcSet={screen2Webp} type="image/webp" />
          <img
            src={screen2}
            alt="screen2"
            className={currentSlide === 1 ? 'w-[314px] max-sm:w-[204px]' : 'w-[264px] max-sm:w-[172px]'}
          />
       </picture>
      </div>
      <div
        className={`keen-slider__slide  items-center flex shrink-0 justify-center    ${
          currentSlide === 2 ? styleActiveEl : 'h-[492px] max-sm:w-[172px] max-sm:h-[320px] !w-[264px]'
        }`}>
        <picture>
        <source srcSet={screen3Webp} type="image/webp" />
          <img
            src={screen3}
            alt="screen3"
            className={currentSlide === 2 ? 'w-[314px] max-sm:w-[204px]' : 'w-[264px] max-sm:w-[172px]'}
          />
        </picture>
      </div>
      <div
        className={`keen-slider__slide  items-center flex shrink-0 justify-center    ${
          currentSlide === 3 ? styleActiveEl : 'h-[492px] max-sm:w-[172px] max-sm:h-[320px] !w-[264px]'
        }`}>
        <picture>
        <source srcSet={screen4Webp} type="image/webp" />
          <img
            src={screen4}
            alt="screen4"
            className={currentSlide === 3 ? 'w-[314px] max-sm:w-[204px]' : 'w-[264px] max-sm:w-[172px]'}
          />
        </picture>
      </div>
      <div
        className={`keen-slider__slide  items-center flex shrink-0 justify-center    ${
          currentSlide === 4 ? styleActiveEl : 'h-[492px] max-sm:w-[172px] max-sm:h-[320px] !w-[264px]'
        }`}>
       <picture>
       <source srcSet={screen5Webp} type="image/webp" />
          <img
            src={screen5}
            alt="screen5"
            className={currentSlide === 4 ? 'w-[314px] max-sm:w-[204px]' : 'w-[264px] max-sm:w-[172px]'}
          />
       </picture>
      </div>
      <div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          background:
            'linear-gradient(90deg, #0F0722 0%, rgba(15, 7, 34, 0.09) 44.40%, rgba(15, 7, 34, 0.00) 57.81%, #0F0722 100%)',
        }}></div>
    </div>
  );
};
