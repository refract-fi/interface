import { style } from '@vanilla-extract/css';
import { fadeIn } from 'theme/animations.css';
import { vars } from 'theme/vars.css';

export const barChartWrapper = style({
  position: 'absolute',
  height: 30,
  gap: vars.space['1x'],
  bottom: 0,
  width: 900,
  top: 365,
  animation: `0.4s ease 0s 1 ${fadeIn}`,
});

export const test = style({
  width: '20%',
  backgroundColor: vars.color.action,
  cursor: 'pointer',
});

export const test1 = style({
  width: '12%',
  backgroundColor: vars.color.action,
  cursor: 'pointer',
});

export const test2 = style({
  width: '10%',
  backgroundColor: vars.color.action,
  cursor: 'pointer',
});

export const test3 = style({
  backgroundColor: vars.color.action,
  cursor: 'pointer',
});

export const test4 = style({
  width: '100%',
  flex: 1,
  backgroundColor: vars.color.action,
  cursor: 'pointer',
});
