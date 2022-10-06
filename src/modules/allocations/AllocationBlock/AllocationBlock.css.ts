import { style } from '@vanilla-extract/css';

export const allocationGridTemplate = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(24, 1fr)',
  width: '100%',
});

export const allocationGridItem = style({
  width: '100%',
  selectors: {
    '&:nth-child(1)': {
      gridColumn: 'span 16',
    },
    '&:nth-child(2)': {
      gridColumn: 'span 5',
    },
    '&:nth-child(3)': {
      gridColumn: 'span 3',
    },
  },
});
