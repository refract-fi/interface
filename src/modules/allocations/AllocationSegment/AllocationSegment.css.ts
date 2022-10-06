import { createVar, style } from '@vanilla-extract/css';

export const proportion = createVar();

export const segmentWrapper = style({
  width: proportion,
});

export const line = style({
  height: 10,
});
