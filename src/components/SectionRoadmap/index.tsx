import React from 'react'
import rocket from '@/assets/NIMBL-rocket.png'

export const SectionRoadmap = () => {
  return (
    <section className='pt-[200px] max-sm:pt-[100px] '>
        <div className='container 2xl:max-w-[1600px] relative '>
            <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-2xl text-center'>ROADMAP</h2>
            <div className='flex justify-between gap-8 max-sm:flex-col max-sm:w-[210px] max-sm:mt-7'>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 1</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- Assembling the team</li>
                        <li>- Team role assignment</li>
                        <li>- Set up sprints and systems for building</li>
                    </ul>
                </div>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 2</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- Web demo release</li>
                        <li>- Building Software Architecture</li>
                        <li>- Initiate Mobile App development</li>
                    </ul>
                </div>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 3</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- App V1 Prototype closed testing</li>
                        <li>- Finalize Nimbl Genesis UI</li>
                        <li>- AppWorks Acceleration program</li>
                        <li>- Integrate AI into Nimbl</li>
                    </ul>
                </div>
            </div>
            <img src={rocket} alt="rocket" className='mix-blend-screen w-[1000px] object-contain mx-auto max-sm:absolute max-sm:-rotate-90 max-sm:top-[150px]  max-sm:-right-[50px] max-sm:w-[350px] max-sm:block' />
            <div className='flex justify-between gap-8 max-sm:flex-col max-sm:w-[210px] max-sm:mt-7'>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 4</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- Assembling the team</li>
                        <li>- Nimbl Genesis Open Alpha</li>
                        <li>- Bounty Program</li>
                        <li>- Partnerships</li>
                    </ul>
                </div>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 5</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- Bounty Campaign Snapshot</li>
                        <li>- V2 release</li>
                        <li>- Nimbl AR development</li>
                        <li>- Activate Gamification</li>
                    </ul>
                </div>
                <div>
                    <p className='bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm'>phase 6</p>
                    <ul className='font-gilroy text-2xl text-white mt-4 max-sm:text-base'>
                        <li>- List on tier 1/2 CEX</li>
                        <li>- User Data Decentralization</li>
                        <li>- In-chat Crypto transfers</li>
                        <li>- Live-streaming</li>
                        <li>- Enable social trading features</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
