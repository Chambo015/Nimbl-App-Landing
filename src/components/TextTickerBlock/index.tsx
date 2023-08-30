import {FC} from 'react';
import './styles.scss';

type Props = {
  text?: string;
};

export const TextTickerBlock: FC<Props> = () => {
  const text = [
    'Communities',
    'Entertaimnet',
    'Announcements',
    'Podcasts',
    'Gems',
    'Bounties',
    'Educational content',
    'Airdrops',
    'Web3 project updates',
    'AMAs  Communities',
  ];
  return (
    <section className="bg-[#20133E] font-gilroy text-white flex w-screen overflow-hidden">
      <div className="whitespace-nowrap inner-line relative py-1 xl:py-2 shrink-0 mx-2">
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
      </div>
      <div className="whitespace-nowrap inner-line  relative py-1 xl:py-2 shrink-0 mx-2">
      {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
        {text.map((item) => {
          return <><span>{item}</span><span className='px-2'>•</span></>;
        })}
      </div>
    </section>
  );
};

/* Communities  •  Entertaimnet  •  Announcements  •  Podcasts  •  Gems  •  Bounties  •  Educational content  •  Airdrops  •  Web3 project updates  •  AMAs  Communities  •  Entertaimnet  •  Announcements  •  Podcasts  •  Gems  •  Bounties  •  Educational content  •  Airdrops  •  Web3 project updates  •  AMAs */
