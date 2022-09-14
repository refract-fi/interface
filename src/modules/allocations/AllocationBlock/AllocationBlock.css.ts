import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const blockWrapper = style({
  width: '100%',
  selectors: {
    '&:nth-child(1), &:nth-child(2), &:nth-child(3)': {
      gridColumn: 'span 4',
    },
    '&:nth-child(2)': {
      borderLeft: `1px solid ${vars.color.separator}`,
      borderRight: `1px solid ${vars.color.separator}`,
    },
    '&:nth-child(2n+4)': {
      borderRight: `1px solid ${vars.color.separator}`,
    },
    '&:nth-child(n+4)': {
      gridColumn: 'span 6',
    },
  },
});
export const border = style({});

export const sectionBanderole = style({
  width: '3px',
  height: '24px',
});

export const tokenSymbol = style({
  width: 24,
  height: 24,
});
