import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const grain = style({
  position: 'relative',
  background: `url('/refract-grain.png')`,
  width: 875,
  height: 445,
  opacity: 0.75,
});

export const refract = style({
  mixBlendMode: 'color-burn',
});
export const scale = style({
  scale: 10,
});
