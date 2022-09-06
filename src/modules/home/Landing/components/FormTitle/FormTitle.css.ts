import { style } from '@vanilla-extract/css';
import { vars } from 'theme/vars.css';

export const input = style({
  backgroundColor: 'black',
  borderBottom: '1px solid white',
  width: '30px',
  margin: '0 0 0 5px',
  color: vars.color.primary,
  textAlign: 'center',
  padding: '5px 0',
});
