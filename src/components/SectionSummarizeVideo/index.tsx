import React from 'react'
import imgLeftBg from '@/assets/bg-summarize-video.png'
import mobileSumm from '@/assets/rotated-phone-summarize.png'

export const SectionSummarizeVideo = () => {
  return (
    <section className='pt-[200px] max-sm:pt-[100px]'>
        <div className='container'>
        <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi text-center max-sm:text-2xl">summarize video</h2>
        <p className='text-center text-white text-2xl font-normal font-gilroy mt-6 max-sm:mt-3 max-sm:text-base'>Get video summaries, timestamps, and similar videos - powered by GPT4</p>
        </div>
        <div className='flex justify-center items-center py-11 relative mt-16 max-sm:mt-8'>
            <div style={{'--image-url': `url(${imgLeftBg})`}}  className="bg-[image:var(--image-url)] bg-cover absolute left-0 top-0 h-full w-1/2 z-0"></div>
            <div className='absolute bg-[#1F283A] right-0 top-0 h-full w-1/2 z-0'></div>
            <img src={mobileSumm} alt="mobileSumm" className='w-[1150px] h-[612px] relative z-10 max-sm:w-full max-sm:h-auto' />
        </div>
    </section>
  )
}
