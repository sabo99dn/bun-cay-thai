import React from 'react';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
  Line,
  ClipPath,
  Pattern,
  Use,
  Image,
  Mask,
} from 'react-native-svg';

export const Plus = ({width = 25, height = 25, color = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="15" cy="15" r="14.5" fill={color} stroke="#5EAF00" />
      <Line
        x1="7.71436"
        y1="15.2857"
        x2="23.1429"
        y2="15.2857"
        stroke="white"
        stroke-width="2"
      />
      <Line
        x1="15.5715"
        y1="7.71429"
        x2="15.5715"
        y2="23.1429"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
};

export const Minus = ({width = 25, height = 25, color = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="15" cy="15" r="14.5" fill={color} stroke="#5EAF00" />
      <Line
        x1="7.71436"
        y1="15.2857"
        x2="23.1429"
        y2="15.2857"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
};

export const Close = ({
  width = 26,
  height = 26,
  color = '#80CD28',
  backgroundColor = '#333',
  fillOpacity = 0.5,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.0011 24.6661C19.4445 24.6661 24.6678 19.4428 24.6678 12.9994C24.6678 6.55611 19.4445 1.33276 13.0011 1.33276C6.55782 1.33276 1.33447 6.55611 1.33447 12.9994C1.33447 19.4428 6.55782 24.6661 13.0011 24.6661Z"
        fill={backgroundColor}
        fillOpacity={fillOpacity}
        stroke="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 9L9 17"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 9L17 17"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
