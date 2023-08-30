import React from 'react'
import ReactPlayer from 'react-player'
import { EscapeIcon } from '../icons/EscapeIcon'


export const ModalWithVideo = ({close}: {close: () => void}) => {
  
  return (
    <div className='fixed inset-x-0 inset-y-0 w-screen h-screen z-40 backdrop-blur-sm bg-black/30 '>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[757px] max-sm:w-[60%] max-sm:h-auto'>
      <button onClick={close} className='absolute top-0 translate-x-[120%]  right-0 z-20'><EscapeIcon /></button>
        <div className='rounded-3xl overflow-hidden border-[#351F52] border-[10px] '>
            <ReactPlayer width="360" height="640" muted  loop playing url='https://d2n3zca7e0phmo.cloudfront.net/lv_0_20230823152332.mp4' />
            </div>
            
      </div>
    </div>
  )
}
