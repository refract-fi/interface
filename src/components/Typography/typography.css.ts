import { style, styleVariants } from '@vanilla-extract/css';
import { mapToProperty } from '../../theme/utils';
import { vars } from '../../theme/vars.css';

export const fonts = styleVariants(vars.fontFamily, mapToProperty('fontFamily'));
export const weight = styleVariants(vars.weight, mapToProperty('fontWeight'));

export const funcFont = style({
  fontFeatureSettings: "'salt' on, 'ss02' on",
});

export const spectrum = style({
  background: vars.background.spectrum,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
