import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const responsiveProperties = defineProperties({
  conditions: {
    sm: { '@media': 'screen and (min-width: 0px)' },
    smd: { '@media': 'screen and (min-width: 500px)' },
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
    xl: { '@media': 'screen and (min-width: 1280px)' },
    xxl: { '@media': 'screen and (min-width: 1536px)' },
  },
  defaultCondition: 'sm',
  properties: {
    display: ['none', 'flex', 'block'],
    flexDirection: ['row', 'column'],
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
    ],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: {
      full: '100%',
      '100vw': '100vw',
      'fit-content': 'fit-content',
      auto: 'auto',
      half: '50%',
      quarter: '25%',
      icon: '24px',
      0: '0px',
      ...vars.space,
    },
    minWidth: vars.space,
    maxWidth: vars.space,
    maxHeight: vars.space,
    height: {
      full: '100%',
      fit: 'fit-content',
      icon: '24px',
      0: '0px',
      auto: 'auto',
      '100vh': '100vh',
      ...vars.space,
    },
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    textAlign: ['center', 'end', 'start'],
    flexWrap: ['nowrap', 'wrap'],
    flex: [0, 1, 2, 3, 4],
    opacity: [0, 0.25, 0.5, 0.75, 1],
    pointerEvents: ['none', 'auto'],
    textTransform: ['uppercase', 'lowercase', 'none'],
    textDecoration: ['underline', 'none'],
    filter: ['invert(1)', 'invert(0)'],
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: vars.lineHeight,
    overflowX: ['hidden', 'scroll', 'auto'],
    overflow: ['hidden', 'scroll', 'auto'],
    overflowY: ['hidden', 'scroll', 'auto'],
    top: { '0': 0, ...vars.space },
    bottom: { '0': 0, ...vars.space },
    left: { '0': 0, ...vars.space },
    right: { '0': 0, ...vars.space },
    whiteSpace: ['normal', 'nowrap'],
    alignSelf: ['flex-start'],
    visibility: ['hidden', 'visible'],
    cursor: ['pointer', 'auto'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1, 2, 3, 4, 5],

    listStyleType: ['circle', 'disc', 'square'],
    borderWidth: ['1px', '2px'],
    borderStyle: ['solid'],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    //   lightMode: {'@media': '(prefers-color-scheme: light)'},
    //   darkMode: { '@media': '(prefers-color-scheme: dark)' },
    darkMode: {},
  },
  defaultCondition: 'darkMode',
  properties: {
    color: vars.color,
    background: vars.background,
    fill: vars.color,
    stroke: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorModeProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
