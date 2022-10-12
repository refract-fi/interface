import { keyframes, style } from '@vanilla-extract/css';
import { fadeOut } from 'theme/animations.css';

export const progressAnimFrames = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
});

export const reviewFormAnim = style({
  animationDelay: '6.3s',
  animationName: fadeOut,
  animationFillMode: 'both',
  animationDuration: '0.5s',
});

export const progressAnim = style({
  animationName: progressAnimFrames,
  animationDuration: '2.5s',
  animationDelay: '3.8s',
  animationTimingFunction: 'linear',
  animationFillMode: 'both',
});
