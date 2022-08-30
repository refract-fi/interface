import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css';

const baseButton = style({
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  // height: 'fit-content',
});

export const active = style({});

export const buttonWrapperVariants = styleVariants({
  primary: {
    background: vars.background.spectrum,
    padding: '1px',
  },
  secondary: {},
  hero: {},
  nav: {},
  none: {},
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
  secondary: [
    baseButton,
    {
      background: vars.background.darkBlue,
      color: vars.color.primary,
      fontWeight: '700',
      textTransform: 'uppercase',
    },
  ],
  hero: [
    baseButton,
    {
      color: vars.color.tertiary,
      background: vars.background.spectrum,
      fontWeight: 700,
      paddingRight: '70px',
      paddingLeft: '70px',
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
  none: [
    baseButton,
    {
      color: vars.color.primary,
    },
  ],
});

export const buttonSizes = styleVariants({
  none: {},
  small: {
    padding: '4px 10px',
  },
  medium: { paddingTop: '8px', paddingBottom: '8px' },
  large: { paddingTop: '10px', paddingBottom: '10px' },
});
