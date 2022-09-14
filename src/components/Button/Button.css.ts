import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css';
const baseButton = style({
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  // height: 'fit-content',
  selectors: {
    '&.disabled': {
      cursor: 'auto',
    },
  },
});

export const active = style({});

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
      selectors: {
        '&.disabled': {
          opacity: 0.3,
          cursor: 'auto',
        },
      },
    },
  ],
  tertiary: [
    baseButton,
    {
      backgroundColor: vars.color['bg-fill-quarter'],
      color: vars.color.primary,
      border: `1px solid ${vars.color['bg-fill-tertiary']}`,
      fontWeight: '700',
      textTransform: 'uppercase',
      selectors: {
        '&.disabled': {
          opacity: 0.3,
          cursor: 'auto',
        },
      },
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
      width: 200,
      paddingTop: 5,
      paddingBottom: 5,
      selectors: {
        [`&.active`]: {
          background: vars.background.spectrum,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
        },
      },
    },
  ],
  exchange: [
    baseButton,
    {
      color: vars.color.primary,
      backgroundColor: vars.color['gray-5'],
      selectors: {
        '&.disabled': {
          opacity: 0.4,
        },
      },
    },
  ],
  inline: [
    baseButton,
    {
      color: vars.color.action,
    },
  ],
  none: [
    baseButton,
    {
      color: vars.color.primary,
    },
  ],
  text: [baseButton, {}],
});

export const buttonSizes = styleVariants({
  none: {},
  small: {
    padding: '4px 10px',
  },
  medium: { paddingTop: '8px', paddingBottom: '8px' },
  large: { paddingTop: '10px', paddingBottom: '10px' },
});
