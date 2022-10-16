import { style } from '@vanilla-extract/css';

export const addressInputWrapper = style({
  '@media': {
    'screen and (min-width: 0px)': {
      width: '100%',
    },
    'screen and (min-width: 1024px)': {
      width: '900px',
    },
  },
});
