import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const childWrapper = style({
  maxWidth: 1100,
  margin: '0 auto',
});

export const textGradient = style({
  background: vars.background.spectrum,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const title = style({
  letterSpacing: '12px',
});
