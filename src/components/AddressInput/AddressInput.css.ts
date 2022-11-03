import { style } from '@vanilla-extract/css';

export const addressInputWrapper = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: '900px',
    },
  },
});
