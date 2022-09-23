import { keyframes, style } from '@vanilla-extract/css';

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const basicFadeIn = style({
  animation: `0.4s ease-in 0s 1 ${fadeIn}`,
  animationFillMode: 'both',
});
