import { style } from '@vanilla-extract/css';

export const refractWrapper = style({
  transition: 'all 0.3s ease',
  left: 0,
  right: 0,
  position: 'absolute',
  selectors: {
    '&.allocations': {
      left: -950,
      position: 'fixed',
    },
    '&.stats': {
      left: 950,
      position: 'fixed',
    },
  },
});

export const grain = style({
  position: 'relative',
  background: `url('/refract-grain.png')`,
  backgroundSize: 'cover',
  width: 900,
  height: 450,
  opacity: 1,
  filter: 'brightness(62%) contrast(150%)',
  transition: 'all 0.3s ease',
  top: 0,
  selectors: {
    '&.refract&.topSkew': {
      top: -75,
      transform: 'perspective(350px) rotateX(65deg) scale(0.65)',
    },
    '&.allocations': {
      top: 0,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.stats': {
      top: 0,
      transform: 'perspective(1200px) rotateY(85deg) scale(1)',
    },
  },
});

export const refract = style({
  width: 900,
  height: 450,
  transition: 'all 0.3s ease',
  mixBlendMode: 'color-burn',
  filter: 'saturate(150%) brightness(110%)',
  top: 0,
  selectors: {
    '&.refract&.topSkew': {
      top: -75,
      transform: 'perspective(350px) rotateX(65deg) scale(0.65)',
    },
    '&.allocations': {
      top: 0,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.stats': {
      top: 0,
      transform: 'perspective(1200px) rotateY(85deg) scale(1)',
    },
  },
});
export const scale = style({
  scale: 10,
});
