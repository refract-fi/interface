import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const textGradient = style({
  background: vars.background.spectrum,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
