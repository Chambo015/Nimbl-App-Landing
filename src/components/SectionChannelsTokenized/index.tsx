import monitorImgLarge from '@/assets/monitor-large.png';
import monitorImgLargeWebp from '@/assets/monitor-large.webp';
import VerticalSlider from './VerticalSlider';

const sliderText = ['Tokengated Communities', 'The Content', 'Channel Growth', 'Alpha Content', 'Giveaways', 'Alpha Calls/Private content', 'Tokengated Communities', 'The Content', 'Channel Growth', 'Alpha Content', 'Giveaways', 'Alpha Calls/Private content']

export const SectionChannelsTokenized = () => {
    function getText(_relative: number, absolute: number) {
        return sliderText[absolute]
      }
  return (
    <section>
      <div className="flex justify-center px-4 gap-9 max-sm:flex-col">
        <div className=' flex flex-col items-start justify-center max-sm:items-center'>
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
        <div>
          <picture><source srcSet={monitorImgLargeWebp} type="image/webp" /><img src={monitorImgLarge} alt="monitorImgLarge" className=' object-bottom object-contain' /></picture>
        </div>
      </div>
    </section>
  );
};
