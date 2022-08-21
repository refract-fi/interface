import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const switchWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '2px',
  width: '44px',
  height: '24px',
  background: vars.color['bg-fill-quarter'],
  borderRadius: '12px',
  selectors: {
    '&.checked': {
      background: vars.background.spectrum,
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
