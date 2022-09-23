import { style } from '@vanilla-extract/css';

export const refractWrapper = style({
  transition: 'all 0.3s ease',
  left: 0,
  right: 0,
  position: 'absolute',
  selectors: {
    '&.allocations': {
      left: -950,
      position: 'absolute',
    },
    '&.stats': {
      left: 950,
      position: 'absolute',
    },
  },
});

export const grain = style({
  position: 'relative',
  background: `url('/refract-grain.png')`,
  width: 900,
  height: 450,
  opacity: 0.73,
  transition: 'all 0.3s ease',
  selectors: {
    '&.topSkew': {
      opacity: 0.4,
      transform: 'perspective(400px) rotateX(70deg) scale(0.65)',
    },
    '&.allocations': {
      opacity: 0.5,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.stats': {
      opacity: 0.5,
      transform: 'perspective(3000px) rotateY(88deg) scale(1)',
    },
  },
});

export const refract = style({
  width: 900,
  height: 450,
  mixBlendMode: 'color-burn',
  transition: 'all 0.3s ease',
  selectors: {
    '&.topSkew': {
      opacity: 1,
      transform: 'perspective(400px) rotateX(70deg) scale(0.65)',
    },
    '&.allocations': {
      opacity: 1,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.stats': {
      opacity: 1,
      transform: 'perspective(3000px) rotateY(88deg) scale(1)',
    },
  },
});
export const scale = style({
  scale: 10,
});
