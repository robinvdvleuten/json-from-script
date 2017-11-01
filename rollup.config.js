import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  moduleName: 'jsonFromScript',
  useStrict: false,
  plugins: [buble()],
};
