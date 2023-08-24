import { HeroButton } from '../HeroButton'
import handImg from '@/assets/hand.png'

export const SectionClipToLong = () => {
  return (
    <section className='pt-40'>
      <div className='container flex items-center max-sm:flex-col'>
        <div className='shrink-0'>
          <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl max-sm:text-2xl max-sm:text-center'>clips<span className='text-2xl font-univers lowercase mx-1 max-sm:text-sm'>to</span>Longs</h2>
          <p className='w-[540px] font-gilroy text-2xl text-white mt-14 max-sm:text-base max-sm:w-full max-sm:text-center max-sm:mt-3'>Post a short-form teaser leading to a long-form video, get the outreach of bite-sized content into your longer piece of content.</p>
          <div className='mt-14 max-sm:flex max-sm:justify-center'>
            <HeroButton>
            <p className="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p>
          </HeroButton>
          </div>
        </div>
        <div className='shrink-0 max-sm:mt-5'>
          <img loading="lazy" src={handImg} alt="handImg" className='w-[1045px] h-[833px] object-contain max-sm:max-w-[170%] max-sm:h-auto ' />
        </div>
      </div>
    </section>
  )
}
