import imgEarth from '@/assets/planet-nimbl.png';
import imgEarthSm from '@/assets/planet-nimbl-sm.png';
import stake from '@/assets/stake.png';
import transfer from '@/assets/transfer.png';
import cursor from '@/assets/cursor.png';
import network from '@/assets/network.png';
import pc from '@/assets/pc.png';
import starShips from '@/assets/star-ships.png';

export const SectionToken = () => {
  return (
    <section className="pt-[200px]">
      <h2 className="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[88px] leading-none font-rfdewi font-black text-center max-sm:text-3xl">
        NIMBL TOKEN
      </h2>
      <p className="text-center text-white font-gilroy text-3xl mt-3 max-sm:text-base">
        $NIMBL is a utility token that acts as the platform currency
      </p>
      <div className="flex h-[1000px] relative max-sm:h-auto max-sm:flex-col">
        <img src={imgEarth} alt="imgEarth" className="ml-auto absolute right-0 -top-[100px] max-sm:hidden" />
        <img src={starShips} alt="starShips" className='w-[380px] absolute left-1/2 top-[30%] -translate-x-1/2 max-sm:hidden' />
        <div className='container 2xl:max-w-[1600px] mx-auto'>
            <div className='mt-28 max-sm:mt-8'>
              <div className="flex items-center gap-5">
                <img src={stake} alt="stake" className='w-[30px] h-[30px]' />
                <p className="text-3xl leading-none text-white font-gilroy max-sm:text-base">Stake $Nimbl to gain governance</p>
              </div>
              <div className="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img src={transfer} alt="transfer" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy max-sm:text-base">Transfer $Nimbl to a username</p>
              </div>
              <div className="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img src={cursor} alt="cursor" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy max-sm:text-base">Access token-gated content</p>
              </div>
              <div className="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img src={network} alt="network" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy max-sm:text-base">Use $Nimbl to Tip creators</p>
              </div>
              <div className="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img src={pc} alt="pc" className='w-[30px] h-[30px]'/>
                <p className="text-3xl leading-none text-white font-gilroy max-sm:text-base">Subscribe to Nimbl Ultra</p>
              </div>
            </div>
        </div>
        <div className='hidden max-sm:block'>
          <img src={imgEarthSm} alt="imgEarthSm" className='w-full' />
        </div>
      </div>
    </section>
  );
};
