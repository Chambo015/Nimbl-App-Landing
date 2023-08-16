import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const animation = {duration: 15000, easing: (t: number) => t};

export const TextTickerBlock = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    mode: 'snap',
    slides: {perView: 'auto', spacing: 10,},
    created(s) {
      s.moveToIdx(39, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 39, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 39, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider w-full bg-[#20133E] py-3 mt-28 overflow-hidden  [&>span]:whitespace-nowrap [&>span]:font-gilroy [&>span]:overflow-hidden shrink-0 [&>span]:flex-shrink-0 [&>span]:!w-[max-content]">
      <span className="keen-slider__slide ">Communities</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide  ">Entertaimnet</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide  ">Announcements</span>
      <span className="keen-slider__slide  ">•</span>
      <span className="keen-slider__slide  ">Podcasts</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Gems</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Bounties</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Educational content </span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Airdrops</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">AMAs Communities </span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Web3 project updates</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Communities</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Entertaimnet</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Announcements</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Podcasts</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Gems</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Bounties</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Educational content </span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Airdrops</span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">AMAs Communities </span>
      <span className="keen-slider__slide ">•</span>
      <span className="keen-slider__slide ">Web3 project updates</span>
      <span className="keen-slider__slide ">•</span>
    </div>
  );
};

/* Communities  •  Entertaimnet  •  Announcements  •  Podcasts  •  Gems  •  Bounties  •  Educational content  •  Airdrops  •  Web3 project updates  •  AMAs  Communities  •  Entertaimnet  •  Announcements  •  Podcasts  •  Gems  •  Bounties  •  Educational content  •  Airdrops  •  Web3 project updates  •  AMAs */
