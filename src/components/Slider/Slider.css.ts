import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const slider = style({
  position: 'relative',
  background: vars.background.spectrum,
  height: '5px',
  width: '100%',
});

export const thumb = style({
  height: '18px',
  width: '18px',
  backgroundColor: 'white',
  borderRadius: '50%',
  top: -6,
});
export const track = style({});

export const mark = style({});
