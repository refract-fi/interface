import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const componentIndex = createVar();

export const fadeInAnimTranslateY = style({
  animation: `fade-in ${(calc.multiply(componentIndex), 2)}s 3s forwards`,
});
