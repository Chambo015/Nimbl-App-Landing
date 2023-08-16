import {FC} from 'react';
import {useTimer} from 'react-timer-hook';

type Props = {
  expiryTimestamp: Date;
};

export const TimerBlock: FC<Props> = ({expiryTimestamp}) => {
  const { seconds, minutes, hours, days} = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });
  return (
    <div>
      <div className='flex justify-center mt-5'>
        <div className="flex font-gilroy items-center gap-8 [&>div]:flex [&>div]:flex-col [&>div]:items-center">
          <div>
            <p className='text-2xl text-[#6FC3FF] tracking-[0.3em] font-semibold text-center'>{days < 10 && '0'}{days}</p>
            <p>days</p>
          </div>
          :
          <div>
            <p className='text-2xl text-[#6FC3FF] tracking-[0.3em] font-semibold text-center '>{hours < 10 && '0'}{hours}</p>
            <p>hours</p>
          </div>
          :
          <div>
            <p className='text-2xl text-[#6FC3FF] tracking-[0.3em] font-semibold text-center'>{minutes < 10 && '0'}{minutes}</p>
            <p>min</p>
          </div>
          :<div>
            <p className='text-2xl text-[#6FC3FF] tracking-[0.3em] font-semibold text-center'>{seconds < 10 && '0'}{seconds}</p>
            <p>sec</p>
          </div>
        </div>
      </div>
      <p className='font-rfdewi mt-6 text-center text-white text-2xl font-bold uppercase tracking-tight'>Until $NIMBL launch</p>
    </div>
  );
};
