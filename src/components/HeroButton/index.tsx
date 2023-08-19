import React, {FC, ReactNode, useMemo} from 'react';
import './styles.scss';

import imgBg from '@/assets/btn-texture.png';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  children: ReactNode;
  xs?: boolean;
  regular?: boolean
};

export const HeroButton: FC<Props> = ({children, xs, regular}) => {
  const matches = useMediaQuery('(min-width: 640px)')
  const size = (): string => {
    if(xs) {
      return 'w-[200px] h-[38px] max-sm:w-[140px] max-sm:h-[30px]'
    } else {
      return 'w-[500px] h-[95px] max-sm:w-[266px] max-sm:h-[50px]'
    }
  }
  const radiusBorder = useMemo(() => {
    if(xs) {
      return matches ?  '13px' :  '8px'
    } else {
      return matches ?   '30px' : '20px'
    }
  }, [xs, matches])

  const marginInnerBorder = useMemo(() => {
    if(xs && !regular) {
      return matches ?  'inset-1' :  'inset-[2px]'
    } else if (regular){
      return 'inset-0'
    } else {
       return  matches ?  'inset-2' :  'inset-1'
    }
  }, [xs, matches, regular])

  return (
    <button style={{'--rb': radiusBorder}} className={`${!regular && 'wrap'} ${size()} relative`}>
      {!regular && <img src={imgBg} alt="imgBg" className="absolute left-0 top-0 w-full object-cover mix-blend-color-burn h-full" />}
      <div className={`inner-border absolute ${marginInnerBorder}`}></div>
      <div className="flex justify-center items-center gap-12 max-sm:gap-5">
        {children}
        {!xs && <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className='max-sm:w-[20px]' xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_6964_8636)">
            <path opacity="0.4" d="M3.58065 16.7109H0V20.2916H3.58065V16.7109Z" fill="white" />
            <path opacity="0.4" d="M37.0006 16.7109H33.4199V20.2916H37.0006V16.7109Z" fill="white" />
            <path opacity="0.4" d="M20.2896 33.418H16.709V36.9986H20.2896V33.418Z" fill="white" />
            <path opacity="0.4" d="M20.2896 0H16.709V3.58065H20.2896V0Z" fill="white" />
            <path d="M20.2896 16.7109H16.709V20.2916H20.2896V16.7109Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_6964_8636">
              <rect width="37" height="37" fill="white" />
            </clipPath>
          </defs>
        </svg>}
      </div>
    </button>
  );
};
