import { createGlobalTheme } from '@vanilla-extract/css';

const createSteps = (base: number, increments: number) => (steps: number) =>
  `${base + steps * increments}px`;

const spaceIncrements = createSteps(4, 4);

export const title = {
  h1: {
    fontSize: '48px',
    lineHeight: '70px',
    fontWeight: '400',
    letterSpacing: '4px',
  },
  h2: {
    fontSize: '34px',
    lineHeight: '41px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h3: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h4: {
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h5: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
  h6: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '3px',
  },
};

export const text = {
  b1: {
    fontSize: '18px',
    lineHeight: '22px',
  },
  b2: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  b3: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  b4: {
    fontSize: '11px',
    lineHeight: '12px',
  },
  b5: {
    fontSize: '10x',
    lineHeight: '12px',
  },
  f1: {
    fontSize: '34px',
    lineHeight: '40px',
    letterSpacing: '1px',
  },
  f2: {
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '1px',
  },
  f3: {
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '1px',
  },
  f4: {
    fontSize: '13px',
    lineHeight: '18px',
    letterSpacing: '0.5px',
  },
  f5: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
  },
  r1: {
    fontSize: '13px',
    lineHeight: '22px',
    letterSpacing: '0.5px',
  },
  r2: {
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.5px',
  },
  r3: {
    fontSize: '10px',
    lineHeight: '15px',
    letterSpacing: '0.5px',
  },
};

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    '0x': spaceIncrements(0),
    '1x': spaceIncrements(1),
    '2x': spaceIncrements(2),
    '3x': spaceIncrements(3),
    '4x': spaceIncrements(4),
    '5x': spaceIncrements(5),
    '6x': spaceIncrements(6),
    '7x': spaceIncrements(7),
    '8x': spaceIncrements(8),
    '9x': spaceIncrements(9),
    '10x': spaceIncrements(10),
    '11x': spaceIncrements(11),
    '12x': spaceIncrements(12),
    '14x': spaceIncrements(14),
    '16x': spaceIncrements(16),
    '18x': spaceIncrements(18),
    '24x': spaceIncrements(24),
    '36x': spaceIncrements(36),
    '40x': spaceIncrements(40),
    '48x': spaceIncrements(48),
    '60x': spaceIncrements(60),
    '72x': spaceIncrements(72),
    '84x': spaceIncrements(84),
    '92x': spaceIncrements(92),
    '104x': spaceIncrements(104),
    '116x': spaceIncrements(116),
  },
  color: {
    white: '#fff',
    black: '#000',

    primary: '#fff',
    secondary: '#868686',
    tertiary: '#48484A',

    action: '#B5FF00',
    positive: '#17D768',
    warning: '#FFC929',
    negative: '#E6164A',

    'bg-primary': '#131314',
    'bg-sec': '#1C1C1E',
  },
  borderRadius: {},
  fontFamily: {
    title: "'IBM Plex Sans', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
    func: "'Inter', sans-serif",
    rubric: "'Inter', sans-serif",
  },
  fontSize: {
    b1: text.b1.fontSize,
    b2: text.b2.fontSize,
    b3: text.b3.fontSize,
    b4: text.b4.fontSize,
    b5: text.b5.fontSize,
    f1: text.f1.fontSize,
    f2: text.f2.fontSize,
    f3: text.f3.fontSize,
    f4: text.f4.fontSize,
    '1': title.h1.fontSize,
    '2': title.h2.fontSize,
    '3': title.h3.fontSize,
    '4': title.h4.fontSize,
    '5': title.h5.fontSize,
    '6': title.h6.fontSize,
  },
  fontWeight: {
    '1': title.h1.fontWeight,
    '2': title.h2.fontWeight,
    '3': title.h3.fontWeight,
    '4': title.h4.fontWeight,
    '5': title.h5.fontWeight,
    '6': title.h6.fontWeight,
    '400': '400',
    '500': '500',
    '600': '600',
    '700': '700',
  },
  lineHeight: {
    b1: text.b1.lineHeight,
    b2: text.b2.lineHeight,
    b3: text.b3.lineHeight,
    b4: text.b4.lineHeight,
    b5: text.b5.lineHeight,
    f1: text.f1.lineHeight,
    f2: text.f2.lineHeight,
    f3: text.f3.lineHeight,
    f4: text.f4.lineHeight,
    '1': title.h1.lineHeight,
    '2': title.h2.lineHeight,
    '3': title.h3.lineHeight,
    '4': title.h4.lineHeight,
    '5': title.h5.lineHeight,
    '6': title.h6.lineHeight,
  },
  letterSpacing: {
    '1': title.h1.letterSpacing,
    '2': title.h2.letterSpacing,
    '3': title.h3.letterSpacing,
    '4': title.h4.letterSpacing,
    '5': title.h5.letterSpacing,
    '6': title.h6.letterSpacing,
  },

  gradients: {
    primary:
      'linear-gradient(90deg, #282630 0%, #D55535 15.62%, #E9B047 29.17%, #F8EC8B 42.71%, #F4F3CB 52.6%, #BBEEF0 63.02%, #88E3F0 73.53%, #4FC1DE 83.8%, #2439BC 100%);',
  },

  weight: {
    regular: '400',
    medium: '500',
    'semi-bold': '600',
    bold: '700',
  },
});
