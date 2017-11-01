import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  useStrict: false,
  plugins: [buble()],
};
