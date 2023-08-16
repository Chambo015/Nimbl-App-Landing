import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {AppHeader} from './components/AppHeader';
import {SectionHero} from './components/SectionHero';
import { TextTickerBlock } from './components/TextTickerBlock';
import { SectionSwipe } from './components/SectionSwipe';
import { SectionUserData } from './components/SectionUserData';
import { SectionModeration } from './components/SectionModeration';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppHeader />
      <main className="main">
        <SectionHero />
        <TextTickerBlock />
        <SectionUserData />
        <SectionModeration />
        <SectionSwipe />
      </main>
    </>
  );
}

export default App;
