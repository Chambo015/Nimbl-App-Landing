import {FC} from 'react';

interface Props {
  isChecked?: boolean;
}

export const CheckboxInvite: FC<Props> = ({isChecked}) => {
  if (!isChecked) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" className='max-sm:w-5 max-sm:h-5 shrink-0'>
        <path stroke="#D9D9D9" stroke-opacity=".2" d="M.5.5h27v27H.5z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" className='max-sm:w-5 max-sm:h-5 shrink-0'>
  <path fill="url(#a123)" d="M0 0h28v28H0z"/>
  <g clip-path="url(#b)">
    <path fill="#fff" fill-opacity=".9" d="M22.562 8.759a1.07 1.07 0 0 1 0 1.576l-9.455 8.91a1.236 1.236 0 0 1-1.673 0L6.707 14.79a1.07 1.07 0 0 1 0-1.576 1.236 1.236 0 0 1 1.673 0l3.893 3.664 8.62-8.12a1.235 1.235 0 0 1 1.673.001h-.004Z"/>
  </g>
  <defs>
    <radialGradient id="a123" cx="0" cy="0" r="1" gradientTransform="rotate(149.338 11.95 2.532) scale(49.4746 21.4363)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F2F9FF" stop-opacity=".81"/>
      <stop offset="0" stop-color="#F2F9FF" stop-opacity=".81"/>
      <stop offset="1" stop-color="#878787"/>
    </radialGradient>
    <clipPath id="b">
      <path fill="#fff" d="M0 0h16.546v17.818H0z" transform="translate(6.364 5.09)"/>
    </clipPath>
  </defs>
</svg>

  );
};
