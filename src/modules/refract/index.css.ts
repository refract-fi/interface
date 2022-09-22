import { style } from '@vanilla-extract/css';
import { fadeIn, fadeOut } from 'theme/animations.css';

export const fadeInAnim = style({
  animation: `0.3s ease 0.15s 1 ${fadeIn}`,
  animationFillMode: 'both',
});

export const fadeOutAnim = style({
  animation: `0.15s linear 0s 1 ${fadeOut}`,
  animationFillMode: 'forwards',
});
