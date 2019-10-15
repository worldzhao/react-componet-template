import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      name: 'RCDefaultName', // 你的包挂在window上的全局变量的名称
      format: 'umd',
      file: 'dist/bundle.umd.js',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    resolve({ extensions: ['.js', 'jsx', '.ts', '.tsx'] }),
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', 'jsx', '.ts', '.tsx']
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      extensions: ['.less']
    }),
    uglify(),
    filesize()
  ]
};
