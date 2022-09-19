import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const switchWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '2px',
  width: '44px',
  height: '24px',
  cursor: 'pointer',
  zIndex: 1,
  background: vars.color['bg-fill-quarter'],
  borderRadius: '12px',
  '::before': {
    position: 'absolute',
    content: '',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    borderRadius: '12px',
    transition: 'all 0.4s ease',
    background: vars.background['inverse-spectrum'],
    opacity: 0,
  },
  selectors: {
    '&.checked': {
      background: vars.background.spectrum,
    },
    ':hover&.checked': {},

    '&:hover::before': {
      opacity: 1,
    },
  },
});

export const slider = style({
  position: 'absolute',
  backgroundColor: vars.color['tint-active'],
  width: 20,
  height: 20,
  borderRadius: '50%',
  margin: '0 2px',
  selectors: {
    '&.checked': {
      right: 0,
    },
  },
});
