import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'bsv',
    globals: {
      buffer: 'Buffer'
    }
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      browser: true
    }),
    commonjs(),
    json()
  ],
  external: ['buffer']
};