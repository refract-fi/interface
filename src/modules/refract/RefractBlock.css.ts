import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const refractBlock = style({
  cursor: 'pointer',
  selectors: {
    '* &:hover': {
      color: vars.color.primary,
    },
  },
});

export const assetBlock = style({
  backgroundColor: vars.color.primary,
});

globalStyle(`${refractBlock}:hover ${assetBlock}`, {
  backgroundColor: vars.color.primary,
});
