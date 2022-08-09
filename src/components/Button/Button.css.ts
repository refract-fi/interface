import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css';

const baseButton = style({
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'fit-content',
});

export const active = style({});

export const buttonWrapperVariants = styleVariants({
  primary: {
    background: vars.gradients.primary,
    padding: '1px',
  },
  hero: {},
  nav: {},
});

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: 'white',
    },
  ],
  hero: [
    baseButton,
    {
      color: vars.color.tertiary,
      background: vars.gradients.primary,
      fontWeight: 700,
      padding: '10px 100px',
    },
  ],
  nav: [
    baseButton,
    {
      color: vars.color.secondary,
      textTransform: 'uppercase',
      backgroundColor: vars.color['bg-primary'],
      width: 200,
      paddingTop: 5,
      paddingBottom: 5,
      selectors: {
        [`${active} &`]: {
          color: 'white',
          fontWeight: '600',
          backgroundColor: vars.color['bg-sec'],
        },
      },
    },
  ],
});
