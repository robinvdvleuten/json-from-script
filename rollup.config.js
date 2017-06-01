const babel = require('rollup-plugin-babel');
const rollup = require('rollup');

const pkg = require('./package.json');

// prettier-ignore
const banner =
  '/*!\n' +
  ' * json-from-script.js v' + pkg.version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' Robin van der Vleuten <robin@webstronauts.co>\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  entry: 'src/index.js',
  moduleName: 'jsonFromScript',
  dest: pkg.main,
  banner,
  useStrict: false,
  format: 'umd',
  plugins: [
    babel({
      presets: [['env', { modules: false }], 'flow'],
      exclude: 'node_modules/**',
      babelrc: false,
    }),
  ],
};
