import {useEffect, useState} from 'react';
import './App.css';
import {AppHeader} from './components/AppHeader';
import {SectionHero} from './components/SectionHero';
import { TextTickerBlock } from './components/TextTickerBlock';
import { SectionSwipe } from './components/SectionSwipe';
import { SectionUserData } from './components/SectionUserData';
import { SectionModeration } from './components/SectionModeration';
import { SectionCrypto } from './components/SectionCrypto';
import { SectionSummarizeVideo } from './components/SectionSummarizeVideo';
import { SectionGridAI } from './components/SectionGridAI';
import { SectionClaim } from './components/SectionClaim';
import { SectionToken } from './components/SectionToken';
import { SectionRoadmap } from './components/SectionRoadmap';
import { AppFooter } from './components/AppFooter';
import { SectionCreateUsers } from './components/SectionCreateUsers';
import { SectionClipToLong } from './components/SectionClipToLong';
import { ModalCommunity } from './components/ModalCommunity';
import { InviteDashboard } from './components/InviteDashboard';
import { ModalWithVideo } from './components/ModalWithVideo';
import { SectionIntroducingStakes } from './components/SectionIntroducingStakes';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true,
  });
import { SectionChannelsTokenized } from './components/SectionChannelsTokenized';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  return (
    <> <AppHeader setIsModalOpen={setIsModalOpen} setIsInviteOpen={setIsInviteOpen} isInviteOpen={isInviteOpen} />
      <div className='bg-[#0F0722]'>
        {!isInviteOpen ? <><main  className="main overflow-hidden">
          <SectionHero />
          <SectionIntroducingStakes />
          <SectionChannelsTokenized />
          <TextTickerBlock />
          <SectionUserData />
          <SectionModeration />
          <SectionSwipe />
          <SectionClipToLong />
          <SectionCrypto openModalVideo={() => {setIsModalVideoOpen(true)}} />
          <SectionCreateUsers />
          <SectionSummarizeVideo />
          <SectionGridAI />
          <SectionClaim />
          <SectionToken />
          <SectionRoadmap />
        </main>
        <AppFooter /> </> : <InviteDashboard />}
       
       
      </div>
      {isModalOpen && <ModalCommunity setIsModalOpen={setIsModalOpen}/>}
      {isModalVideoOpen && <ModalWithVideo close={() => {setIsModalVideoOpen(false)}}/>}
    </>
  );
}

export default App;
