import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const active = style({});
export const borderButtonVariants = styleVariants({
  option: {
    background: vars.color.secondary,
    padding: '1px',
    selectors: {
      '&.active': {
        background: vars.background.spectrum,
      },
      ':hover&.active': {
        background: vars.background['inverse-spectrum'],
      },
    },
    ':hover': {
      background: vars.background['inverse-spectrum'],
    },
  },
  default: {},
});
