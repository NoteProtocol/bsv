import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  // CommonJS (for Node) build
  {
    input: 'index.js',
    output: {
      file: 'dist/bsv.cjs.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      json()
    ],
    external: ['buffer', 'crypto']
  },

  // ES module (for bundlers) build
  {
    input: 'index.js',
    output: {
      file: 'dist/bsv.esm.js',
      format: 'es'
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      commonjs(),
      json()
    ],
    external: ['buffer', 'crypto']
  },

  // Browser-friendly UMD build
  {
    input: 'index.js',
    output: {
      file: 'dist/bsv.umd.js',
      format: 'umd',
      name: 'bsv',
      globals: {
        buffer: 'Buffer',
        crypto: 'crypto'
      }
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      json()
    ]
  }
];