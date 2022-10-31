import { style } from '@vanilla-extract/css';

export const modalWrapper = style({
  padding: '36px 24px',
});

export const networkWrapper = style({
  '@media': {
    'screen and (min-width: 0px)': { height: 'calc(100% - 140px)' },
    'screen and (min-width: 768px)': { height: 'auto' },
  },
});
