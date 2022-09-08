import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const active = style({});
export const borderButtonVariants = styleVariants({
  primary: {
    background: vars.background.spectrum,
    padding: '1px',
  },
  secondary: {},
  tertiary: {},
  hero: {},
  nav: {},
  none: {},
  text: {},
});
