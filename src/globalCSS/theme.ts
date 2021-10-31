//!!! 다음 프로젝트에서 바꿀 부분
//!! 디자인적 분리와 재활용성 => className을 이용한 css로
//!! 기능적 분리와 재활용성 => emotion styled를 이용한 component 단위의 조각 만들기

//# 즉, 관심사 분리가 필요

//@ CSS PART START ///////////////////////////////////////////////////////////////
export const calcRem = (px: number) => `${px / 16}rem` as const;

//mobile first
export const renderMediaQuery = (display: string, minWidth: number, options?: string) => {
  return `@media ${display} and (min-width: ${minWidth}px)${options ? ` ${options}` : ""}` as const;
};

export const colors = {
  black: "#2b2b2b",
  white: "#FFFFFF",
  indigo: "#181F38",
  grayOne: "#F7F7F7",
  grayTwo: "#E5E5E5",
  grayThree: "#999999",
  grayFour: "#111",
  pointColorYello: "#ffc114",
  pointColorCarrot: "#ff5248",
  pointColorMint: "#19cdca",
  pointColorBlue: "#4e80e1",
  lightblue: "#C5E2EE",
  footerColor: "#313131",
  mainColor: "#E7286A",
  waringColor: "#ff0000",
  starColor: "#fd4",
  purple: "#7027A0",
  gradient: "linear-gradient(to right, #fa9e2c, #8f50fb)",
  gradientAlt: "linear-gradient(to right, #8f50fb, #350a4f)",
  graidentTransparent: "linear-gradient(to right, rgba(250, 158, 44,0.3), rgba(143, 80, 251,0.5))",
} as const;

export const fontSizes = {
  xsmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(16 * 2),
} as const;

export const paddings = {
  xxsmall: calcRem(4),
  xsmall: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

export const margins = {
  xxsmal: calcRem(4),
  xsmal: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

export const deviceSizeUnits = {
  mobileS: 320,
  mobileM: 450,
  mobileL: 576,
  tablet: 768,
  desktop: 922,
  tabletL: 1024,
  fullScreen: 1980,
} as const;

export const mediaQuery = {
  phone: renderMediaQuery("screen", deviceSizeUnits.mobileL),
  tablet: renderMediaQuery("screen", deviceSizeUnits.tablet),
  desktop: renderMediaQuery("screen", deviceSizeUnits.desktop),
  tabletL: renderMediaQuery("screen", deviceSizeUnits.tabletL),
} as const;

//@ CSS PART END ///////////////////////////////////////////////////////////////

//# TYPE PART START ////////////////////////////////////////////////////////
export const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizeUnits,
  mediaQuery,
};

export type ThemeType = typeof theme;
//# TYPE PART END ////////////////////////////////////////////////////////
