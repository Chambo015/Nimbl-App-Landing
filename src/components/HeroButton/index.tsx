import React, {FC, ReactNode} from 'react';
import './styles.scss';

import imgBg from '@/assets/btn-texture.png';

type Props = {
  children: ReactNode;
  xs?: boolean;
  regular?: boolean
};

export const HeroButton: FC<Props> = ({children, xs, regular}) => {
  const size = (): string => {
    if(xs) {
      return 'w-[200px] h-[38px]'
    } else {
      return 'w-[500px] h-[95px]'
    }
  }
  return (
    <button style={{'--rb': xs ?  '13px': '30px'}} className={`${!regular && 'wrap'} ${size()} relative`}>
      {!regular && <img src={imgBg} alt="imgBg" className="absolute left-0 top-0 w-full object-cover mix-blend-color-burn" />}
      <div className={`inner-border absolute ${!xs ? 'inset-2' : regular ? 'inset-0' : 'inset-1'}`}></div>
      <div className="flex justify-center items-center gap-12">
        {children}
        {!xs && <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
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
