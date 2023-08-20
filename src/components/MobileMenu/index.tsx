import {FC} from 'react';
import {HeroButton} from '../HeroButton';
import {TwitterIcon} from '../icons/TwitterIcon';
import {TelegramIcon} from '../icons/TelegramIcon';
import {DiscordIcon} from '../icons/DiscordIcon';
interface Props {
  isOpen: boolean;
}
export const MobileMenu: FC<Props> = ({isOpen}) => {
  return (
    <div
      className={`fixed bg-[#21193D] inset-x-0 bottom-0 top-[50px] w-screen h-[calc(100vh-50px)] transition-transform duration-200 py-7 px-5 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <ul className="flex justify-center  flex-col items-center">
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Intro</p>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">AI solutions</p>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Token</p>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Invite</p>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Join Community </p>
            <div className="flex gap-3 items-center mt-2 justify-center">
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <TelegramIcon />
              </a>
              <a href="#">
                <DiscordIcon />
              </a>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Contacts</p>
          </a>
        </li>
        <li>
          <a href="" className="py-5 inline-block">
            <p className="font-gilroy font-medium">Lightpaper</p>
          </a>
        </li>
      </ul>
      <div className="mt-5 flex justify-center">
        <HeroButton xs>
          <p className="font-rfdewi text-[10px] font-bold uppercase">DOWNLOAD APP</p>
        </HeroButton>
      </div>
    </div>
  );
};
