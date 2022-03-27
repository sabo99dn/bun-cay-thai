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

export const MAIN_STACK_BOTTOM_TABS_HOME = ({width = 14, height = 17}) => {
  return (
    <Svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23.2222 26C23.9589 26 24.6655 25.7366 25.1864 25.2678C25.7073 24.7989 26 24.163 26 23.5V9.75L13.5 1L1 9.75V23.5C1 24.163 1.29266 24.7989 1.81359 25.2678C2.33453 25.7366 3.04107 26 3.77778 26M23.2222 26H3.77778M23.2222 26H17.6667M3.77778 26H9.33333M9.33333 26V13.5H17.6667V26M9.33333 26H17.6667"
        stroke="#848484"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_HOME_ACTIVE = ({width = 14, height = 17}) => {
  return (
    <Svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 1L7.25 5.375L1 9.75V23.5C1 24.163 1.29266 24.7989 1.81359 25.2678C2.33453 25.7366 3.04107 26 3.77778 26H9.33333V13.5H17.6667V26H23.2222C23.9589 26 24.6655 25.7366 25.1864 25.2678C25.7073 24.7989 26 24.163 26 23.5V9.75L13.5 1Z"
        fill="#80CD28"
      />
      <Path d="M9.33333 26H17.6667V13.5H9.33333V26Z" fill="#80CD28" />
      <Path
        d="M23.2222 26C23.9589 26 24.6655 25.7366 25.1864 25.2678C25.7073 24.7989 26 24.163 26 23.5V9.75L13.5 1L7.25 5.375L1 9.75V23.5C1 24.163 1.29266 24.7989 1.81359 25.2678C2.33453 25.7366 3.04107 26 3.77778 26M23.2222 26H3.77778M23.2222 26H17.6667M3.77778 26H9.33333M9.33333 26V13.5H17.6667V26M9.33333 26H17.6667"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_MEMBER_CARDS = ({width = 27, height = 20}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M26 3.27273C26 2.01753 24.9825 1 23.7273 1H3.27273C2.01753 1 1 2.01753 1 3.27273M26 3.27273V16.9091M26 3.27273V7.81818M26 16.9091C26 18.1643 24.9825 19.1818 23.7273 19.1818H3.27273C2.01753 19.1818 1 18.1643 1 16.9091M26 16.9091V7.81818M1 16.9091V3.27273M1 16.9091V7.81818M1 3.27273V7.81818M1 7.81818H26"
        stroke="#848484"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_MEMBER_CARDS_ACTIVE = ({
  width = 27,
  height = 20,
  fillColor = '#80CD28',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.27273 1H23.7273C24.9825 1 26 2.01753 26 3.27273V7.81818V16.9091C26 18.1643 24.9825 19.1818 23.7273 19.1818H3.27273C2.01753 19.1818 1 18.1643 1 16.9091V7.81818V3.27273C1 2.01753 2.01753 1 3.27273 1Z"
        fill={fillColor}
      />
      <Path
        d="M26 3.27273C26 2.01753 24.9825 1 23.7273 1H3.27273C2.01753 1 1 2.01753 1 3.27273M26 3.27273V16.9091M26 3.27273V7.81818M26 16.9091C26 18.1643 24.9825 19.1818 23.7273 19.1818H3.27273C2.01753 19.1818 1 18.1643 1 16.9091M26 16.9091V7.81818M1 16.9091V3.27273M1 16.9091V7.81818M1 3.27273V7.81818M1 7.81818H26"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_CART_STACK = ({width = 55, height = 55, fillColor = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="55" height="55" rx="15" fill={fillColor} />
      <Path
        d="M13 14H18.4545L22.1091 32.2591C22.2338 32.8869 22.5753 33.4509 23.0739 33.8522C23.5725 34.2536 24.1964 34.4668 24.8364 34.4545H38.0909C38.7309 34.4668 39.3548 34.2536 39.8533 33.8522C40.3519 33.4509 40.6935 32.8869 40.8182 32.2591L43 20.8182H19.8182M25.2727 41.2727C25.2727 42.0258 24.6622 42.6364 23.9091 42.6364C23.156 42.6364 22.5455 42.0258 22.5455 41.2727C22.5455 40.5196 23.156 39.9091 23.9091 39.9091C24.6622 39.9091 25.2727 40.5196 25.2727 41.2727ZM40.2727 41.2727C40.2727 42.0258 39.6622 42.6364 38.9091 42.6364C38.156 42.6364 37.5455 42.0258 37.5455 41.2727C37.5455 40.5196 38.156 39.9091 38.9091 39.9091C39.6622 39.9091 40.2727 40.5196 40.2727 41.2727Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_PROMOTION = ({width = 27, height = 27}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.52007 7.52177H7.53311M25.2416 15.8827L15.8918 25.2349C15.6496 25.4774 15.362 25.6699 15.0454 25.8011C14.7288 25.9324 14.3894 26 14.0467 26C13.7039 26 13.3645 25.9324 13.0479 25.8011C12.7313 25.6699 12.4437 25.4774 12.2015 25.2349L1 14.0435V1H14.0401L25.2416 12.2044C25.7274 12.6932 26 13.3544 26 14.0435C26 14.7327 25.7274 15.3939 25.2416 15.8827Z"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const MAIN_STACK_BOTTOM_TABS_PROMOTION_ACTIVE = ({
  width = 27,
  height = 27,
  fillColor = '#80CD28',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M25.2416 15.8827L15.8918 25.2349C15.6496 25.4774 15.362 25.6699 15.0454 25.8011C14.7288 25.9324 14.3894 26 14.0467 26C13.7039 26 13.3645 25.9324 13.0479 25.8011C12.7313 25.6699 12.4437 25.4774 12.2015 25.2349L1 14.0435V1H14.0401L25.2416 12.2044C25.7274 12.6932 26 13.3544 26 14.0435C26 14.7327 25.7274 15.3939 25.2416 15.8827Z"
        fill={fillColor}
      />
      <Path
        d="M7.52007 7.52177H7.53311M25.2416 15.8827L15.8918 25.2349C15.6496 25.4774 15.362 25.6699 15.0454 25.8011C14.7288 25.9324 14.3894 26 14.0467 26C13.7039 26 13.3645 25.9324 13.0479 25.8011C12.7313 25.6699 12.4437 25.4774 12.2015 25.2349L1 14.0435V1H14.0401L25.2416 12.2044C25.7274 12.6932 26 13.3544 26 14.0435C26 14.7327 25.7274 15.3939 25.2416 15.8827Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MAIN_STACK_BOTTOM_TABS_PROFILE_STACK = ({width = 24, height = 27}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M23.2222 26V23.2222C23.2222 21.7488 22.6369 20.3357 21.595 19.2939C20.5532 18.252 19.1401 17.6667 17.6667 17.6667H6.55556C5.08213 17.6667 3.66905 18.252 2.62718 19.2939C1.58532 20.3357 1 21.7488 1 23.2222V26M17.6667 6.55556C17.6667 9.6238 15.1794 12.1111 12.1111 12.1111C9.04286 12.1111 6.55556 9.6238 6.55556 6.55556C6.55556 3.48731 9.04286 1 12.1111 1C15.1794 1 17.6667 3.48731 17.6667 6.55556Z"
      stroke="#848484"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export const MAIN_STACK_BOTTOM_TABS_PROFILE_STACK_ACTIVE = ({
  width = 24,
  height = 27,
  fillColor = '#80CD28',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M23.2222 26V23.2222C23.2222 21.7488 22.6369 20.3357 21.595 19.2939C20.5532 18.252 19.1401 17.6667 17.6667 17.6667H6.55556C5.08213 17.6667 3.66905 18.252 2.62718 19.2939C1.58532 20.3357 1 21.7488 1 23.2222V26"
      fill={fillColor}
    />
    <Path
      d="M12.1111 12.1111C15.1794 12.1111 17.6667 9.6238 17.6667 6.55556C17.6667 3.48731 15.1794 1 12.1111 1C9.04286 1 6.55556 3.48731 6.55556 6.55556C6.55556 9.6238 9.04286 12.1111 12.1111 12.1111Z"
      fill={fillColor}
    />
    <Path
      d="M23.2222 26V23.2222C23.2222 21.7488 22.6369 20.3357 21.595 19.2939C20.5532 18.252 19.1401 17.6667 17.6667 17.6667H6.55556C5.08213 17.6667 3.66905 18.252 2.62718 19.2939C1.58532 20.3357 1 21.7488 1 23.2222V26M17.6667 6.55556C17.6667 9.6238 15.1794 12.1111 12.1111 12.1111C9.04286 12.1111 6.55556 9.6238 6.55556 6.55556C6.55556 3.48731 9.04286 1 12.1111 1C15.1794 1 17.6667 3.48731 17.6667 6.55556Z"
      stroke={fillColor}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
