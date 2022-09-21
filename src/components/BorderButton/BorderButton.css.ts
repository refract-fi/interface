import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const active = style({});
export const borderButton = style({
  padding: '1px',
});

export const borderButtonVariants = styleVariants({
  option: [
    borderButton,
    {
      background: vars.color.secondary,
      selectors: {
        '&.active': {
          background: vars.background.spectrum,
        },
        ':hover&.active': {
          background: vars.background['inverse-spectrum'],
        },
      },
      ':hover': {
        background: vars.background['inverse-spectrum'],
      },
    },
  ],
  default: [
    borderButton,
    {
      background: vars.background.spectrum,
      ':hover': {
        background: vars.background['inverse-spectrum'],
      },
    },
  ],
  secondary: [
    borderButton,
    {
      background: vars.color.secondary,
      ':hover': {
        background: vars.background['inverse-spectrum'],
      },
    },
  ],
});

globalStyle(
  `${borderButtonVariants['default']} button, ${borderButtonVariants['secondary']} button`,
  {
    backgroundColor: vars.color['bg-fill-quarter'],
    color: vars.color.primary,
  }
);

globalStyle(`${borderButtonVariants['default']}:hover button`, {
  backgroundColor: vars.color['bg-fill-quarter'],
  color: vars.color.primary,
});
