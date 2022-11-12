import { globalStyle, style } from '@vanilla-extract/css';
import { refractBlock } from 'modules/refract/RefractBlock.css';
import { vars } from 'theme/vars.css';

export const assetBlock = style({
  backgroundColor: vars.color.primary,
});

globalStyle(`${refractBlock}:hover ${assetBlock}`, {
  backgroundColor: vars.color.primary,
});
