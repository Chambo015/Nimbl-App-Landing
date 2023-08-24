import { FC } from 'react'
import { HeroButton } from '../HeroButton'
import { EscapeIcon } from '../icons/EscapeIcon'
import imgMobile from '@/assets/nimbl-screens-modal.png'

interface Props {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  }

export const ModalCommunity: FC<Props> = ({setIsModalOpen}) => {
  return (
    <div className='fixed bg-black/50 w-screen h-screen z-50 inset-x-0 inset-y-0 backdrop-blur-sm'>
        <div className='absolute bg-[#21193D] w-[885px] h-[583px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[50px] pl-[40px]'>
            <button onClick={() => {setIsModalOpen(false)}} className='absolute top-0 right-0 z-20'><EscapeIcon /></button>
            <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl w-1/2'>join our community</h2>
            <div className='flex flex-col gap-5 mt-11'>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">Discord</p></HeroButton>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">X/Twitter</p></HeroButton>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">Telegram</p></HeroButton>
            </div>
            <img loading="lazy" src={imgMobile} alt="imgMobile" className='absolute bottom-0 right-[17px] h-full z-10' />
        </div>
    </div>
  )
}
