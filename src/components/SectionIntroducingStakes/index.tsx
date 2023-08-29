import React from 'react';
import {ChartBackground} from './ChartBackground';
import { ChartLine1 } from './ChartLines/ChartLine1';
import { ChartLine2 } from './ChartLines/ChartLine2';
import { ChartLine3 } from './ChartLines/ChartLine3';
import { ChartLine4 } from './ChartLines/ChartLine4';
import userImg1 from '@/assets/chart-user1.png'
import userImg2 from '@/assets/chart-user2.png'
import userImg3 from '@/assets/chart-user3.png'

export const SectionIntroducingStakes = () => {
  return (
    <section className='pt-[200px]'>
        <div className='container'>
            <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl text-center'>Introducing Stakes</h2>
            <p className='font-gilroy text-[28px] leading-tight text-center mt-8 max-sm:text-base'>Join the next generation of social engagement with Stakes,  a platform that intertwines community interaction with the excitement of owning stakes in your favorite groups and influencers.</p>
        </div>
      <div className='flex justify-center mt-28'>
        <div className='relative'><ChartBackground />
        <div className='absolute top-[5%] left-0 w-full'><ChartLine1 /></div>
        <div className='absolute top-0 left-0 w-full'><ChartLine2 />
        <img src={userImg3} alt="user_chart" className='absolute left-[53%] top-[3%] z-20 w-[110px] h-[110px] max-sm:w-[60px] max-sm:h-[60px] max-sm:top-[5%]' loading='lazy' /></div>
        <div className='absolute top-0 left-0 w-full'><ChartLine3 />
        <img src={userImg1} alt="user_chart" className='absolute left-[28%] top-[10%] z-20 w-[110px] h-[110px] max-sm:w-[60px] max-sm:h-[60px] max-sm:top-[12%] max-sm:left-[40%]' loading='lazy' /></div>
        <div className='absolute top-0 left-0 w-full'><ChartLine4 />
        <img src={userImg2} alt="user_chart" className='absolute left-[68%] top-[25%] z-20 w-[110px] h-[110px] max-sm:w-[60px] max-sm:h-[60px] max-sm:top-[32%] max-sm:left-[52%]' loading='lazy' /></div>
        </div>
      </div>
      <div className='flex justify-center gap-6 h-[150px] mt-8'>
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="45" fill="none" viewBox="0 0 37 45" >
  <circle cx="18" cy="11" r="11" fill="#FF8743"/>
  <circle cx="18" cy="11" r="7" fill="#000"/>
  <path fill="#fff" d="m4.045 42-3.5-9.8h1.4l2.842 8.176L7.615 32.2h1.414L5.515 42h-1.47Zm6.35-8.274a.799.799 0 0 1-.589-.238.782.782 0 0 1-.238-.574c0-.224.08-.415.238-.574a.777.777 0 0 1 .589-.252c.223 0 .415.084.574.252.158.159.238.35.238.574 0 .224-.08.415-.239.574a.782.782 0 0 1-.573.238ZM9.777 42v-7h1.218v7H9.778Zm3.93-2.94c.122.625.407 1.11.855 1.456.457.345 1.017.518 1.68.518.924 0 1.596-.34 2.016-1.022l1.036.588c-.682 1.055-1.708 1.582-3.08 1.582-1.111 0-2.016-.345-2.716-1.036-.691-.7-1.036-1.582-1.036-2.646 0-1.055.34-1.932 1.022-2.632.681-.7 1.563-1.05 2.646-1.05 1.026 0 1.862.364 2.506 1.092.653.719.98 1.587.98 2.604 0 .177-.014.36-.042.546h-5.866Zm2.423-3.094c-.654 0-1.195.187-1.624.56-.43.364-.696.854-.798 1.47h4.676c-.103-.663-.364-1.167-.784-1.512a2.245 2.245 0 0 0-1.47-.518ZM28.989 35h1.274l-2.17 7h-1.246l-1.638-5.18L23.571 42h-1.246l-2.17-7h1.274l1.54 5.32L24.621 35h1.176l1.652 5.334L28.99 35Zm3.14 1.89c0 .27.136.49.406.658.27.159.598.29.98.392.383.093.766.205 1.148.336.383.121.71.336.98.644.27.299.406.686.406 1.162 0 .635-.247 1.143-.742 1.526-.485.383-1.11.574-1.876.574-.681 0-1.264-.15-1.75-.448a2.504 2.504 0 0 1-1.036-1.19l1.05-.602c.112.336.322.602.63.798.308.196.677.294 1.106.294.402 0 .733-.075.994-.224.262-.159.392-.401.392-.728 0-.27-.135-.485-.406-.644a3.36 3.36 0 0 0-.98-.392c-.382-.103-.765-.22-1.148-.35a2.308 2.308 0 0 1-.98-.644c-.27-.299-.406-.681-.406-1.148 0-.607.234-1.106.7-1.498.476-.392 1.069-.588 1.778-.588.57 0 1.074.13 1.512.392.448.252.784.607 1.008 1.064l-1.022.574c-.252-.597-.751-.896-1.498-.896-.345 0-.64.084-.882.252a.77.77 0 0 0-.364.686Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="45" fill="none" viewBox="0 0 31 45">
  <circle cx="15" cy="11" r="11" fill="#DB3031"/>
  <circle cx="15" cy="11" r="7" fill="#000"/>
  <path fill="#fff" d="M2.486 41.076h4.48V42h-5.46v-9.8h.98v8.876Zm6.681-7.756a.648.648 0 0 1-.476.196.648.648 0 0 1-.476-.196.648.648 0 0 1-.196-.476c0-.187.065-.345.196-.476a.65.65 0 0 1 .476-.196c.187 0 .345.065.476.196.13.13.196.29.196.476a.648.648 0 0 1-.196.476ZM8.229 42v-7h.924v7h-.924Zm8.54 0h-1.231l-3.5-3.374V42h-.924v-9.8h.924v5.894L15.37 35h1.26l-3.612 3.36L16.77 42Zm3.8-7.168c1.036 0 1.87.369 2.506 1.106.643.728.966 1.591.966 2.59 0 .103-.01.247-.029.434h-6.146c.094.71.393 1.274.896 1.694.514.41 1.144.616 1.89.616.532 0 .99-.107 1.372-.322.392-.224.686-.513.883-.868l.811.476a3.324 3.324 0 0 1-1.26 1.176c-.531.29-1.138.434-1.82.434-1.1 0-1.997-.345-2.688-1.036-.69-.69-1.035-1.568-1.035-2.632 0-1.045.34-1.918 1.021-2.618.682-.7 1.56-1.05 2.633-1.05Zm0 .896c-.729 0-1.34.22-1.834.658-.486.43-.775.99-.869 1.68h5.223c-.094-.737-.378-1.311-.854-1.722a2.471 2.471 0 0 0-1.666-.616Zm5.396 1.106c0 .317.14.57.42.756.28.187.62.331 1.022.434.401.103.802.22 1.204.35.401.121.742.331 1.022.63.28.29.42.672.42 1.148 0 .597-.238 1.083-.714 1.456-.467.373-1.073.56-1.82.56-.672 0-1.246-.15-1.722-.448-.467-.299-.794-.686-.98-1.162l.784-.462c.13.364.364.653.7.868.345.205.751.308 1.218.308.457 0 .84-.089 1.148-.266.308-.187.462-.471.462-.854 0-.317-.14-.57-.42-.756a3.308 3.308 0 0 0-1.022-.434 29.119 29.119 0 0 1-1.204-.336 2.455 2.455 0 0 1-1.022-.63c-.28-.299-.42-.686-.42-1.162 0-.57.224-1.045.672-1.428.457-.383 1.031-.574 1.722-.574.57 0 1.069.13 1.498.392.43.252.747.597.952 1.036l-.77.448c-.27-.653-.83-.98-1.68-.98-.401 0-.747.098-1.036.294a.908.908 0 0 0-.434.812Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="70" height="45" fill="none" viewBox="0 0 70 45">
  <circle cx="35" cy="11" r="11" fill="#00F7FF"/>
  <circle cx="35" cy="11" r="7" fill="#000"/>
  <path fill="#fff" d="M5.731 42.182c-1.484 0-2.711-.49-3.682-1.47-.961-.98-1.442-2.184-1.442-3.612s.48-2.632 1.442-3.612c.97-.98 2.198-1.47 3.682-1.47.896 0 1.718.215 2.464.644a4.635 4.635 0 0 1 1.764 1.736l-1.134.658a3.1 3.1 0 0 0-1.26-1.288 3.527 3.527 0 0 0-1.834-.49c-1.13 0-2.053.364-2.772 1.092-.71.728-1.064 1.638-1.064 2.73 0 1.083.355 1.988 1.064 2.716.719.728 1.643 1.092 2.772 1.092.672 0 1.284-.159 1.834-.476.56-.327.98-.756 1.26-1.288l1.134.644a4.633 4.633 0 0 1-1.75 1.75 4.932 4.932 0 0 1-2.478.644Zm11.457-1.064c-.718.71-1.59 1.064-2.618 1.064-1.026 0-1.899-.355-2.618-1.064-.709-.71-1.064-1.582-1.064-2.618 0-1.036.355-1.909 1.064-2.618.72-.71 1.592-1.064 2.618-1.064 1.027 0 1.9.355 2.618 1.064.72.71 1.078 1.582 1.078 2.618 0 1.036-.359 1.909-1.078 2.618Zm-2.618-.126c.7 0 1.288-.238 1.764-.714s.714-1.069.714-1.778c0-.71-.238-1.302-.714-1.778s-1.064-.714-1.764-.714c-.69 0-1.274.238-1.75.714s-.714 1.069-.714 1.778c0 .71.238 1.302.714 1.778s1.06.714 1.75.714Zm12.692-6.174c.784 0 1.419.257 1.904.77.486.504.728 1.19.728 2.058V42h-1.218v-4.312c0-.541-.14-.961-.42-1.26-.28-.299-.653-.448-1.12-.448-.522 0-.942.177-1.26.532-.308.345-.462.877-.462 1.596V42h-1.218v-4.312c0-.541-.135-.961-.406-1.26-.261-.299-.62-.448-1.078-.448-.513 0-.942.177-1.288.532-.336.355-.504.887-.504 1.596V42h-1.218v-7h1.218v.938c.476-.747 1.172-1.12 2.086-1.12.943 0 1.629.397 2.058 1.19.486-.793 1.218-1.19 2.198-1.19Zm11.881 0c.784 0 1.419.257 1.904.77.486.504.728 1.19.728 2.058V42h-1.218v-4.312c0-.541-.14-.961-.42-1.26-.28-.299-.653-.448-1.12-.448-.523 0-.943.177-1.26.532-.308.345-.462.877-.462 1.596V42h-1.218v-4.312c0-.541-.135-.961-.406-1.26-.261-.299-.62-.448-1.078-.448-.513 0-.943.177-1.288.532-.336.355-.504.887-.504 1.596V42h-1.218v-7h1.218v.938c.476-.747 1.171-1.12 2.086-1.12.943 0 1.629.397 2.058 1.19.486-.793 1.218-1.19 2.198-1.19Zm5.175 4.242c.121.625.406 1.11.854 1.456.457.345 1.017.518 1.68.518.924 0 1.596-.34 2.016-1.022l1.036.588c-.681 1.055-1.708 1.582-3.08 1.582-1.11 0-2.016-.345-2.716-1.036-.69-.7-1.036-1.582-1.036-2.646 0-1.055.34-1.932 1.022-2.632.681-.7 1.563-1.05 2.646-1.05 1.027 0 1.862.364 2.506 1.092.653.719.98 1.587.98 2.604 0 .177-.014.36-.042.546h-5.866Zm2.422-3.094c-.653 0-1.195.187-1.624.56-.43.364-.695.854-.798 1.47h4.676c-.103-.663-.364-1.167-.784-1.512a2.245 2.245 0 0 0-1.47-.518Zm8.372-1.148c.822 0 1.48.261 1.974.784.495.513.742 1.213.742 2.1V42H56.61v-4.228c0-.57-.154-1.008-.462-1.316-.308-.317-.733-.476-1.274-.476-.607 0-1.096.191-1.47.574-.373.373-.56.952-.56 1.736V42h-1.218v-7h1.218v1.008c.495-.793 1.25-1.19 2.268-1.19Zm8.224 1.358h-1.861v3.794c0 .345.065.593.195.742.14.14.35.215.63.224.28 0 .626-.01 1.037-.028V42c-1.065.14-1.844.056-2.339-.252-.494-.317-.741-.91-.741-1.778v-3.794H58.87V35h1.386v-1.596l1.218-.364V35h1.861v1.176Zm2.15.714c0 .27.136.49.407.658.27.159.597.29.98.392.382.093.765.205 1.148.336.382.121.709.336.98.644.27.299.406.686.406 1.162 0 .635-.248 1.143-.742 1.526-.486.383-1.111.574-1.876.574-.682 0-1.265-.15-1.75-.448a2.504 2.504 0 0 1-1.036-1.19l1.05-.602c.112.336.322.602.63.798.308.196.676.294 1.106.294.401 0 .732-.075.994-.224.261-.159.392-.401.392-.728 0-.27-.136-.485-.406-.644a3.358 3.358 0 0 0-.98-.392c-.383-.103-.766-.22-1.148-.35a2.308 2.308 0 0 1-.98-.644c-.271-.299-.406-.681-.406-1.148 0-.607.233-1.106.7-1.498.476-.392 1.068-.588 1.778-.588.569 0 1.073.13 1.512.392.448.252.784.607 1.008 1.064l-1.022.574c-.252-.597-.752-.896-1.498-.896-.346 0-.64.084-.882.252a.77.77 0 0 0-.364.686Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="45" fill="none" viewBox="0 0 22 45">
  <circle cx="11" cy="11" r="11" fill="#A162F7"/>
  <circle cx="11" cy="11" r="7" fill="#000"/>
  <path fill="#fff" d="M11.264 42H9.78l-2.408-3.864L4.964 42h-1.47l3.15-5.04-2.968-4.76h1.47l2.226 3.57 2.226-3.57h1.47l-2.954 4.746L11.264 42Zm4.842-9.8c.905 0 1.657.303 2.254.91.607.597.91 1.344.91 2.24 0 .887-.303 1.633-.91 2.24-.597.607-1.349.91-2.254.91h-2.254V42H12.55v-9.8h3.556Zm0 5.082c.541 0 .99-.182 1.344-.546.355-.373.532-.835.532-1.386 0-.56-.177-1.022-.532-1.386-.355-.364-.803-.546-1.344-.546h-2.254v3.864h2.254Z"/>
</svg>

      </div>
    </section>
  );
};
