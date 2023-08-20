import {useState} from 'react';
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AppHeader setIsModalOpen={setIsModalOpen} />
      
      <main className="main overflow-hidden">
        <SectionHero />
        <TextTickerBlock />
        <SectionUserData />
        <SectionModeration />
        <SectionSwipe />
        <SectionClipToLong />
        <SectionCrypto />
        <SectionCreateUsers />
        <SectionSummarizeVideo />
        <SectionGridAI />
        <SectionClaim />
        <SectionToken />
        <SectionRoadmap />
      </main>
      <AppFooter />
     {isModalOpen && <ModalCommunity setIsModalOpen={setIsModalOpen}/>}
    </>
  );
}

export default App;
