const white = '#fefefe';
const black = '#2a2a2a';

const blank = '#fff';
const grey = '#6f6f6f';

const red = '#ff1d58';
const redAccent = '#f75990';
const yellow = '#fff685';
const blue = '#0049b7';
const blueAccent = '00ddff';

const styles = {
  root: {
    lineHeight: 1.6,
  },
};

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    white,
    black,
    blank,
    grey,

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
    monospace: 'Menlo, monospace',
  },
  shadows: {
    none: 0,
    regular: '0 7px 30px -10px rgba(150,170,180,0.5)',
  },
  border: {
    none: 0,
    soft: '1px solid rgba(150,170,180,0.1)',
  },
  radii: [0, 2, 4],
  styles,
};
