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
      opacity: 0.3,
    },
  },
});

const defaultHover = style({
  transition: 'all 0.2s ease',
  ':hover': {
    opacity: 0.7,
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
      position: 'relative',
      color: vars.color.primary,
      fontWeight: '700',
      textTransform: 'uppercase',
      zIndex: 1,
      '::before': {
        position: 'absolute',
        content: '',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        transition: 'all 0.4s ease',
        background: vars.background['inverse-darkBlue'],
        opacity: 0,
      },
      selectors: {
        '&:hover::before': {
          opacity: 1,
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
      position: 'relative',
      color: vars.color.black,
      background: vars.background.spectrum,
      fontWeight: 700,
      paddingRight: '70px',
      paddingLeft: '70px',
      zIndex: 1,
      '::before': {
        position: 'absolute',
        content: '',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        transition: 'all 0.4s ease',
        background: vars.background['inverse-spectrum'],
        opacity: 0,
      },
      selectors: {
        '&:hover::before': {
          opacity: 1,
        },
      },
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
          ':hover': {
            // transform: 'matrix(-1, 0, 0, 1, 0, 0)',
          },
        },
      },
    },
  ],
  exchange: [
    baseButton,
    {
      color: vars.color.primary,
      backgroundColor: vars.color['gray-5'],
      transition: 'all 0.2s ease',
      selectors: {
        '&.disabled': {
          opacity: 0.4,
        },
      },
      ':hover': {
        backgroundColor: '#2C2C2EB3',
      },
    },
  ],
  default: [baseButton, defaultHover],
  none: [baseButton, {}],
});

export const buttonSizes = styleVariants({
  none: {},
  small: {
    padding: '4px 10px',
  },
  medium: { paddingTop: '8px', paddingBottom: '8px' },
  large: { paddingTop: '10px', paddingBottom: '10px' },
});
