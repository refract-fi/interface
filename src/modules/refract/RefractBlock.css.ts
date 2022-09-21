import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const refractBlock = style({
  cursor: 'pointer',
  selectors: {
    '* &:hover': {
      color: vars.color.blue,
    },
  },
});

export const assetBlock = style({
  backgroundColor: vars.color.secondary,
});

globalStyle(`${refractBlock}:hover ${assetBlock}`, {
  backgroundColor: vars.color.blue,
});
