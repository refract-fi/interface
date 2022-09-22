import { style } from '@vanilla-extract/css';

export const refractWrapper = style({
  transition: 'all 0.3s ease',
  left: 0,
  right: 0,
  selectors: {
    '&.leftSkew': {
      left: -495,
    },
    '&.rightSkew': {
      left: 495,
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
    '&.leftSkew': {
      opacity: 0.5,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.rightSkew': {
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
    '&.leftSkew': {
      opacity: 1,
      transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
    },
    '&.rightSkew': {
      opacity: 1,
      transform: 'perspective(3000px) rotateY(88deg) scale(1)',
    },
  },
});
export const scale = style({
  scale: 10,
});
