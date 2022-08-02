import { style } from '@vanilla-extract/css';

export const button = style({
  background: 0,
  border: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
});

// HTML5 display-role reset for older browsers

const a = style({
  textDecoration: 'none',
});

const body = style({
  lineHeight: 1,
});

const input = style({
  textDecoration: 'none',
  border: 'none',
});

const list = style({
  listStyle: 'none',
});

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
});

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

// Custom reset rules
const mark = style({
  backgroundColor: 'transparent',
  color: 'inherit',
});

const select = style({
  appearance: 'none',
  selectors: {
    '&::-ms-expand': {
      display: 'none',
    },
  },
});

export const element = {
  button,
  a,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  input: input,
  body,
  table,
  mark,
  select,
};
