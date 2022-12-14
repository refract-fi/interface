import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const checkbox = style({
  WebkitAppearance: 'none',
  backgroundColor: vars.color['bg-fill-tertiary'],
  border: `1px solid ${vars.color['bg-fill-secondary']}`,
  width: '20px',
  height: '20px',
  position: 'relative',
  selectors: {
    '&:checked': {
      background: vars.background.blue,
      border: `0px`,
    },
    '&::before': {
      content: ' ',
      position: 'absolute',
      backgroundImage: 'url(/icons/checkmark.svg)',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '17px',
      height: '17px',
      display: 'none',
      pointerEvents: 'none',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    '&.checkmark-line&::before': {
      top: '80%',
      backgroundImage: 'url(/icons/checkmark-line.svg)',
    },
    '&:checked::before': {
      display: 'block',
    },
  },
});

export const checkboxWrapperVariants = styleVariants({
  none: {
    cursor: 'pointer',
    ':hover': {
      color: '#FFFFFFB3',
    },
  },
  button: {
    cursor: 'pointer',
    selectors: {
      '&.active': {
        backgroundColor: vars.color['gray-5'],
      },
      '&:hover&.active': {
        backgroundColor: '#2C2C2EB3',
        color: vars.color.primary,
      },
    },
    ':hover': {
      color: '#FFFFFFB3',
    },
  },
});
