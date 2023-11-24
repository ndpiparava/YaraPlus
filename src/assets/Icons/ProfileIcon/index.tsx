import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropsType = {
  isActive?: boolean;
};

export default function ProfileIcon({ isActive = false }: PropsType) {
  const strokeColor = isActive ? '#037AFF' : '#C0C0C0';
  return (
    <Svg
      width='40px'
      height='40px'
      viewBox='-4.8 -4.8 33.60 33.60'
      fill='none'
      stroke={strokeColor}
    >
      <G id='SvgRepo_bgCarrier' stroke-width='0' />

      <G
        id='SvgRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <G id='SvgRepo_iconCarrier'>
        <Path
          d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
          stroke={strokeColor}
          stroke-width='2.4'
        />
        <Path
          d='M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z'
          stroke={strokeColor}
          stroke-width='2.4'
        />
        <Path
          d='M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5'
          stroke={strokeColor}
          stroke-width='2.4'
          stroke-linecap='round'
        />
      </G>
    </Svg>
  );
}
