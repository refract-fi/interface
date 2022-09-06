import { keyframes } from '@vanilla-extract/css';

const fadeInTranslateY = keyframes({
  '0%': {
    transform: 'translateY(-20%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0%)',
    opacity: 1,
  },
});

export const fadeInTranslateYAnim = keyframes({
  '0%': {
    animation: `0.4s ease 1s 1 ${fadeInTranslateY}`,
    animationFillMode: 'both',
  },
});
