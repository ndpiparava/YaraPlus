import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropsType = {
  isActive?: boolean;
};

export default function HomeIcon({ isActive = false }: PropsType) {
  const strokeColor = isActive ? '#037AFF' : '#C0C0C0';
  return (
    <Svg
      width='40px'
      height='40px'
      viewBox='-6.3 -6.3 33.60 33.60'
      fill={strokeColor}
    >
      <G id='SVGRepo_bgCarrier' stroke-width='0' />

      <G
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <G id='SVGRepo_iconCarrier'>
        <G
          id='Page-1'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'
        >
          <G
            id='Dribbble-Light-Preview'
            transform='translate(-419.000000, -720.000000)'
            fill={strokeColor}
          >
            <G id='icons' transform='translate(56.000000, 160.000000)'>
              <Path
                d='M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z'
                id='home-[#1391]'
              ></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
