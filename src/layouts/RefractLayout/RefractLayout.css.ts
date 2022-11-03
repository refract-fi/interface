import { keyframes, style } from '@vanilla-extract/css';
import { fadeIn } from 'theme/animations.css';
import { vars } from 'theme/vars.css';

export const childWrapper = style({
  maxWidth: 1100,
  margin: '0 auto',
  width: '100%',
  selectors: {
    '&.refract': {
      marginTop: '450px',
    },
  },
});

export const textGradient = style({
  background: vars.background.spectrum,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const title = style({
  letterSpacing: '8px',
});
