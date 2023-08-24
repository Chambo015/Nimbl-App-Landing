import {AppButton} from '../AppButton';
import logo from '@/assets/logo.png';
import {MenuIcon} from '../icons/MenuIcon';
import {FC, useState, useRef, useEffect, useCallback, useMemo} from 'react';
import {MobileMenu} from '../MobileMenu';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import {Popover} from '@headlessui/react';
import {HeroButton} from '../HeroButton';
import Scrambler from 'scrambling-text';
import {throttle} from '@/utils';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isInviteOpen: boolean;
  setIsInviteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppHeader: FC<Props> = ({setIsModalOpen, isInviteOpen, setIsInviteOpen}) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [text, setText] = useState('Lightpaper');
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  const handleTextScramble = (t: string) => {
    console.log('1');
    scramblerRef.current.scramble(t, setText);
  };

  const handleTextScrambleWithThrottle = useMemo(() => throttle(handleTextScramble, 2000), []);

  return (
    <header className="w-full bg-[rgba(33,25,61,.30)] h-20 max-sm:h-[50px] fixed top-0 inset-x-0 backdrop-blur-md z-50">
      <div className="px-2 flex items-center h-full gap-[20px] justify-between">
        <button
          onClick={() => {
            setIsInviteOpen(false);
          }}>
          <img src={logo} alt="logo" className="w-[121px] h-[44px] object-contain" loading="lazy" />
        </button>
        <nav className="font-[Gilroy] flex gap-[10px] items-center max-sm:hidden">
          <a href="#" className=" text-center text-white text-base font-medium hover:text-[#0066FE]">
            Intro
          </a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium ">/</div>
          <a href="#" className=" text-center text-white text-base font-medium hover:text-[#0066FE]">
            AI solutions
          </a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href="#" className=" text-center text-white text-base font-medium hover:text-[#0066FE]">
            Token
          </a>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <button
            onClick={() => {
              setIsInviteOpen(true);
            }}
            className={`text-center hover:text-[#0066FE] ${
              isInviteOpen ? 'text-white' : 'text-white'
            } text-base font-medium`}>
            Invite
          </button>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className=" text-center text-white text-base font-medium hover:text-[#0066FE]">
            Join Community
          </button>
          <div className="text-center text-white text-opacity-40 text-xs font-medium">/</div>
          <a href="#" className=" text-center text-white text-base font-medium hover:text-[#0066FE]">
            Contacts
          </a>
        </nav>
        <div className="flex gap-[20px] items-center max-sm:hidden">
          <button
            onMouseEnter={() => {
              handleTextScrambleWithThrottle('Lightpaper v2 under construction');
            }}
            onMouseLeave={() => {
              handleTextScrambleWithThrottle('Lightpaper');
            }}
            className="min-w-[250px] h-[60px] flex items-center justify-end">
            <p className=" text-center text-white text-base font-medium font-[Gilroy] hover:text-[#0066FE]">{text}</p>
          </button>

          <Popover className="relative">
            <Popover.Button>
              {' '}
              <AppButton>DOWNLOAD APP</AppButton>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 right-0 top-[calc(100%+10px)]">
              <div className="bg-[#20133E] p-4">
                <HeroButton className="!w-[268px]" xs regular>
                  <p className="font-rfdewi text-xs max-sm:text-[10px] leading-none font-bold uppercase">
                    APPLY FOR CLOSED BETA
                  </p>
                </HeroButton>
                <HeroButton className="!w-[268px] mt-4" xs regular>
                  <p className="font-rfdewi text-xs max-sm:text-[10px] leading-none font-bold uppercase">
                    Launch Desktop Demo App
                  </p>
                </HeroButton>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Popover>
        </div>
        <button
          className="sm:hidden"
          onClick={() => {
            setIsOpenMenuMobile((p) => !p);
          }}>
          <MenuIcon />
        </button>
      </div>
      {isMobile && (
        <MobileMenu
          isOpen={isOpenMenuMobile}
          setIsInviteOpen={setIsInviteOpen}
          setIsOpenMenuMobile={setIsOpenMenuMobile}
        />
      )}
    </header>
  );
};
