import { createVar, keyframes, style } from '@vanilla-extract/css';

export const componentIndex = createVar();

const fadeIn = keyframes({
  '0%': {
    transform: 'translateY(-20%)',
    opacity: 0,
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0%)',
  },
});

export const fadeInAnimTranslateY = style({
  animationFillMode: 'both',
  animationDuration: '0.6s',
  animationTimingFunction: 'ease',
  animationIterationCount: 1,
  animationDelay: componentIndex,
  animationName: fadeIn,
});
