import { keyframes, style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

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

export const progressAnimFrames = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
});

export const dots = keyframes({
  '0%': {
    color: 'rgba(0, 0, 0, 0)',
    textShadow: `0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)`,
  },
  '20%': {
    color: 'rgba(0, 0, 0, 0)',
    textShadow: `0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)`,
  },
  '40%': {
    color: vars.color.secondary,
    textShadow: `0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0)`,
  },
  '60%': {
    textShadow: `0.25em 0 0 ${vars.color.secondary}, 0.5em 0 0 rgba(0, 0, 0, 0)`,
  },
  '80%': { textShadow: `0.25em 0 0 ${vars.color.secondary}, 0.5em 0 0 ${vars.color.secondary}` },
  '100%': { textShadow: `0.25em 0 0 ${vars.color.secondary}, 0.5em 0 0 ${vars.color.secondary}` },
});

export const refractWrapper = style({
  width: 900,
  height: 450,
  animationName: fadeIn,
  animationDuration: '1s',
  animationFillMode: 'both',
  marginTop: '50px',
  overflow: 'hidden',
});

export const reviewFormAnim = style({
  animationDelay: '6.3s',
  animationName: fadeOut,
  animationFillMode: 'both',
  animationDuration: '0.5s',
});

export const loadingDots = style({
  ':after': {
    content: '.',
    animation: `${dots} 2s steps(5, end) infinite`,
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
