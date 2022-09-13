import { createVar, style } from '@vanilla-extract/css';

export const rotation = createVar();

export const rotate = style({
  transform: `rotate(${rotation})`,
});
