import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

const baseInput = style({
  backgroundColor: vars.color.black,
  color: vars.color.white,
  '::placeholder': {
    color: vars.color.secondary,
    opacity: 1,
  },
});

export const inputWrapperVariants = styleVariants({
  hero: {
    background: vars.background.spectrum,
    padding: '1px',
    width: '800px',
  },
  primary: {},
});

export const inputVariants = styleVariants({
  hero: [
    baseInput,
    {
      height: '100%',
      minWidth: 'max-content',
      padding: '7.5px 8px',
      selectors: {
        '&:focus': {
          outline: 'none',
        },
      },
      flex: '1',
    },
  ],
  primary: [baseInput, {}],
});
