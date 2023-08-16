import {useState} from 'react';
import './styles.scss';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import screen1 from '@/assets/app-screens/screen-1.png';
import screen2 from '@/assets/app-screens/screen-2.png';
import screen3 from '@/assets/app-screens/screen-3.png';
import screen4 from '@/assets/app-screens/screen-4.png';
import screen5 from '@/assets/app-screens/screen-5.png';

export const SliderAppMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 15,
      origin: 'center',
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        /* slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        }) */
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]);
  return (
    <div ref={ref} className="keen-slider !w-[1530px] items-center relative mx-auto">
      <div className={`keen-slider__slide items-center flex ${
          currentSlide === 0 ? 'w-[314px] h-[586px]' : 'h-[492px] w-[264px]'
        }`}>
        <img src={screen1} alt="screen1" className={currentSlide === 0 ? 'w-[314px]' : 'w-[264px]'} />
      </div>
      <div
        className={`keen-slider__slide number-slide2 ${
          currentSlide === 1 ? 'w-[314px] h-[586px]' : 'h-[492px] w-[264px]'
        }`}>
        <img src={screen2} alt="screen2"  className={currentSlide === 1 ? 'w-[314px]' : 'w-[264px]'} />
      </div>
      <div className={`keen-slider__slide items-center flex ${
          currentSlide === 2 ? 'w-[314px] h-[586px]' : 'h-[492px] w-[264px]'
        }`}>
        <img src={screen3} alt="screen3"  className={currentSlide === 2 ? 'w-[314px]' : 'w-[264px]'} />
      </div>
      <div className={`keen-slider__slide items-center flex ${
          currentSlide === 3 ? 'w-[314px] h-[586px]' : 'h-[492px] w-[264px]'
        }`}>
        <img src={screen4} alt="screen4"  className={currentSlide === 3 ? 'w-[314px]' : 'w-[264px]'} />
      </div>
      <div className={`keen-slider__slide items-center flex ${
          currentSlide === 4 ? 'w-[314px] h-[586px]' : 'h-[492px] w-[264px]'
        }`}>
        <img src={screen5} alt="screen5"  className={currentSlide === 4 ? 'w-[314px]' : 'w-[264px]'}/>
      </div>
      <div className='absolute left-0 top-0 w-full h-full' style={{background: 'linear-gradient(90deg, #0F0722 0%, rgba(15, 7, 34, 0.09) 44.40%, rgba(15, 7, 34, 0.00) 57.81%, #0F0722 100%)'}}></div>
    </div>
  );
};
