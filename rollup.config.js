import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

export default {
  input: 'redux/index.js',
  output: {
    file: 'dist/redux.rollup.bundle.js',
    format: 'cjs', // cjs(CommonJS), iife
    sourcemap: true
  },
  watch: {
    include: 'redux/**',
    clearScreen: false
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    babel(),
    commonjs()
  ]
};