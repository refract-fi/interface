import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const fadeInAnim = style({
  animation: `0.7s ease 0s 1 ${fadeIn}`,
  animationFillMode: 'forwards',
});

export const fadeOutAnim = style({
  animation: `0.15s linear 0s 1 ${fadeOut}`,
  animationFillMode: 'forwards',
});
