import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

const baseInput = style({
  backgroundColor: vars.color.black,
  color: vars.color.white,
  '::placeholder': {
    color: vars.color.secondary,
    opacity: 1,
  },
});

export const inputVariants = styleVariants({
  hero: [
    baseInput,
    {
      height: '100%',
      minWidth: '260px',
      padding: '7.5px 8px',
      selectors: {
        '&:focus': {
          outline: 'none',
        },
      },
      flex: '1',
    },
  ],
  primary: [
    baseInput,
    {
      backgroundColor: vars.color['bg-fill-tertiary'],
      '::placeholder': {
        color: vars.color.secondary,
        opacity: 1,
      },
      ':-ms-input-placeholder': {
        color: vars.color.secondary,
      },
      '::-ms-input-placeholder': {
        color: vars.color.secondary,
      },
    },
  ],
});

export const inputSizeVariants = styleVariants({
  large: {
    width: '800px',
  },
  medium: {
    padding: '8px 12px',
  },
  none: {},
});
