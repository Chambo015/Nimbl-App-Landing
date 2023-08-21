import {CheckboxInvite} from '../icons/CheckboxInvite';
import imgPhase2 from '@/assets/phase2.png';
import {PrivateLockIcon} from '../icons/PrivateLockIcon';
import {HeroButton} from '../HeroButton';

export const InviteDashboard = () => {
  return (
    <section className="mt-20 max-sm:mt-[50px]">
      <div className="container py-[70px]">
        <h2 className="bg-gradient-to-b max-sm:text-2xl from-white to-white/50 text-transparent uppercase bg-clip-text font-rfdewi font-black text-[50px] leading-none">
          invite dashboard
        </h2>
        <div className="flex mt-8 gap-10 max-sm:flex-col">
          <div className="bg-[#20133E] pt-[40px] max-sm:pt-4">
            <p className="font-gilroy text-white text-3xl inline font-medium uppercase max-sm:text-base tracking-widest pl-[40px] max-sm:pl-[17px] border-b pb-1 border-white/50">
              Phase 1
            </p>

            <div className="py-10 pl-10 max-sm:pl-[17px] max-sm:py-4 pr-8">
              <ul className="space-y-7 max-sm:space-y-4">
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Follow @Nimbltv on X/Twitter
                  </p>
                  <CheckboxInvite isChecked={true} />
                </li>
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Repost Nimbl’s Thread
                  </p>{' '}
                  <CheckboxInvite isChecked={false} />
                </li>
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Sign Up for Closed Alpha
                  </p>
                  <CheckboxInvite isChecked={false} />
                </li>
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Join Nimbl Community on Discord
                  </p>
                  <CheckboxInvite isChecked={false} />
                </li>
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Join Nimbl Community on Telegram
                  </p>
                  <CheckboxInvite isChecked={false} />
                </li>
                <li className="flex gap-9 items-center justify-between">
                  <p className="text-[#94BFFF] max-sm:text-xs text-2xl font-normal font-gilroy border-[rgba(148,191,255,0.23)] border-b">
                    Connect Wallet to participate in Airdrop
                  </p>
                  <CheckboxInvite isChecked={false} />
                </li>
              </ul>
            </div>
            <div className="w-full bg-[linear-gradient(90deg,#2B253A_0%,#3E3A6E_100%)] py-4">
              <p className="text-center text-white text-opacity-70 text-xl font-medium uppercase font-gilroy max-sm:text-sm">
                complete to unlock phase 2
              </p>
            </div>
          </div>
          <div>
            <div
              style={{'--bg': `url(${imgPhase2})`}}
              className="w-[660px] h-[368px] bg-[image:var(--bg)] flex justify-center bg-cover items-center max-sm:w-full max-sm:h-[220px]">
              <PrivateLockIcon />
            </div>

            <div className="mt-10">
              <div className="flex gap-8 items-center ml-auto">
                <HeroButton className="!w-[317px] !h-[66px] max-sm:!w-1/2 max-sm:!h-[27px]" xs regular>
                  <p className="font-rfdewi text-xl max-sm:text-[10px] leading-none font-bold uppercase">
                    CHECK ELLIGIBILITY
                  </p>
                </HeroButton>
               
                  <HeroButton className="!w-[317px] !h-[66px] max-sm:!w-1/2 max-sm:!h-[27px]" xs>
                    <p className="font-rfdewi text-xl  max-sm:text-[10px] leading-none font-bold uppercase">DOWNLOAD APP</p>
                  </HeroButton>
              
              </div>
            </div>
            <div >
              <p className="font-gilroy text-2xl mt-10 mb-3 max-sm:text-xs">Whitelisted Wallets:</p>
             
                <svg xmlns="http://www.w3.org/2000/svg" width="660" height="30" fill="none" viewBox="0 0 660 30" className='w-full'>
                  <path fill="#2E1D57" d="M7.824 0 0 8.368V30h652.176L660 21.79V0H7.824Z" />
                  <path fill="#0066FE" d="M7.824 0 0 8.368V30h421.176L429 21.79V0H7.824Z" />
                </svg>
           
              <p className="font-gilroy text-white/60 mt-1 max-sm:text-xs">[34.000 out 50.000]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
