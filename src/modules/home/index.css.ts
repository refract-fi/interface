import { style } from '@vanilla-extract/css';
import { fadeIn, fadeOut } from 'theme/animations.css';

export const fadeInAnim = style({
  animation: `0.7s ease 0s 1 ${fadeIn}`,
  animationFillMode: 'forwards',
});

export const fadeOutAnim = style({
  animation: `0.15s linear 0s 1 ${fadeOut}`,
  animationFillMode: 'forwards',
});
