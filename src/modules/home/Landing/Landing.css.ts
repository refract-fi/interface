import { style } from '@vanilla-extract/css';

export const title = style({
  marginRight: '-30px',
  '@media': {
    'screen and (min-width: 0px)': { letterSpacing: '20px' },
    'screen and (min-width: 768px)': { letterSpacing: '35px' },
  },
});
