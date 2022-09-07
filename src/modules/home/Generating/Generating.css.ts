import { keyframes, style } from '@vanilla-extract/css';

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const generatingAnim = style({
  animationName: fadeIn,
  animationDuration: '1s',
  animationDelay: '0.5s',
  animationFillMode: 'both',
});
