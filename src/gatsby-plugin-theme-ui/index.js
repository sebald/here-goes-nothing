const white = '#fefefe';
const black = '#2a2a2a';

const blank = '#fff';
const greyLight = '#fafafa';
const grey = '#6f6f6f';

const red = '#ff1d58';
const redAccent = '#f75990';
const yellow = '#fff685';
const blue = '#0049b7';
const blueAccent = '#90bcff';

const styles = {
  root: {
    lineHeight: 1.6,
  },
  img: {
    display: 'block',
    m: '0 auto',
  },
};

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    white,
    black,
    blank,
    grey,
    greyLight,

    text: black,
    heading: blue,
    background: white,

    primary: blue,
    secondary: blueAccent,

    accent: red,
    highlight: yellow,
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Raleway, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  shadows: {
    none: 0,
  },
  border: {
    none: 0,
  },
  radii: [0, 2, 4],
  styles,
};
