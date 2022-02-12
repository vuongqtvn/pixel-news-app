import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

// Iphone X/XS/11 Pro
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const WIDTH = width > height ? height : width;
const HEIGHT = width > height ? width : height;

const scale = size => {
  return (WIDTH / DESIGN_WIDTH) * size;
};

const horizontalScale = size => {
  return (WIDTH / DESIGN_WIDTH) * size;
};

const verticalScale = size => {
  return (HEIGHT / DESIGN_HEIGHT) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

// getSize.m(10) Responsive for padding - margin - fontSize
// getSize.s(10) Responsive by width screen. (Image Size)
// getSize.h(10) Responsive by height screen.
// getSize.v(10) Responsive by width screen.

export const getSize = {
  v: verticalScale,
  m: moderateScale,
  h: horizontalScale,
  s: scale,
};
