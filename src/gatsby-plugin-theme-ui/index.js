const white = '#fefefe';
const black = '#2a2a2a';

const red = '#ff1d58';
const redAccent = '#f75990';
const yellow = '#fff685';
const blue = '#0049b7';
const blueAccent = '00ddff';

const styles = {};

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    white,
    black,

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
  styles,
};
