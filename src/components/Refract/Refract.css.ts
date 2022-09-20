import { style, styleVariants } from '@vanilla-extract/css';

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

export const rectangles = styleVariants({
  j: {
    fill: 'url(#e)',
  },
  k: {
    fill: 'url(#d)',
  },
  l: {
    fill: 'url(#g)',
  },
  m: {
    fill: 'url(#f)',
  },
  n: {
    fill: 'url(#i)',
  },
  o: {
    fill: 'url(#h)',
  },
  p: {
    fill: 'url(#c)',
  },
  q: {
    fill: 'none',
  },
  r: {
    fill: '#fff',
  },
  s: {
    clipPath: 'url(#b)',
  },
});

{
  /* <style>.j{fill:url(#e);}.k{fill:url(#d);}.l{fill:url(#g);}.m{fill:url(#f);}.n{fill:url(#i);}.o{fill:url(#h);}.p{fill:url(#c);}.q{fill:none;}.r{fill:#fff;}.s{clip-path:url(#b) }</style> */
}
