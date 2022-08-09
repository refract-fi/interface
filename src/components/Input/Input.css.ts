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
    background: vars.gradients.primary,
    padding: '1px',
    width: '500px',
  },
  primary: {},
});

export const inputVariants = styleVariants({
  hero: [
    baseInput,
    {
      height: '100%',
      width: '100%',
      padding: '16px 12px',
    },
  ],
  primary: [baseInput, {}],
});
