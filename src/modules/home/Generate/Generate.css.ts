import { keyframes, style } from '@vanilla-extract/css';

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const reviewFormAnim = style({
  animationDelay: '6.3s',
  animationName: fadeOut,
  animationFillMode: 'both',
  animationDuration: '0.5s',
});

export const progressAnimFrames = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
});

export const progressAnim = style({
  animationName: progressAnimFrames,
  animationDuration: '2.5s',
  animationDelay: '3.8s',
  animationTimingFunction: 'linear',
  animationFillMode: 'both',
});

export const generatingAnim = style({
  animationName: fadeIn,
  animationDuration: '1s',
  animationFillMode: 'both',
});

export const gradientKeyframes = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

export const gradientAnim = style({
  backgroundSize: '200%',
  animation: `${gradientKeyframes} 4s ease-out infinite`,
});
