import {Dimensions} from 'react-native';
export const dim = Dimensions.get('window');

//IPHONE 6 SCREEN RESOLUTION
const baseWidth = 375;
const baseHeight = 667;

const baseAvg = (baseWidth + baseHeight) / 2;
const screenAvg = (dim.width + dim.height) / 2;

// export const rem = screenAvg / baseAvg;

export const rem = 1;

export default {
  $rem: rem,
  $smallText10: 10 * rem,
  $smallText: 12 * rem,
  $normalText: 14 * rem,
  $normalText16: 16 * rem,
  $mediumText: 18 * rem,
  $largeText: 20 * rem,
  $maxText: 24 * rem,
  $borderInputWidth: 1 * rem,
  $borderButtonWidth: 1 * rem,
  $smallLineHeight: 14 * rem,
  $normalLineHeight: 16 * rem,
  $mediumLineHeight: 20 * rem,
  $largeLineHeight: 22 * rem,
  $maxLineHeight: 26 * rem,
  $borderBtnRadius: 10 * rem,
  $btnHeight: 50 * rem,
  $screenWidth: dim.width,
  $screenHeight: dim.height,
  $screenPaddingLeft: 20 * rem,
  $screenPaddingRight: 20 * rem,
  $textAmount: 30 * rem,
  $titleSelect: 15 * rem,
  $screenName: 17 * rem,
};
