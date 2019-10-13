import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/es/index.js'
    },
    {
      format: 'cjs',
      file: 'dist/lib/index.js'
    }
  ],
  // 此处将不需要打包的模块外置
  external(id) {
    return /@babel\/runtime/.test(id) || ['react', 'react-dom', 'prop-types'].includes(id);
  },
  plugins: [
    resolve({ extensions: ['.js', 'jsx', '.ts', '.tsx'] }),
    babel({
      exclude: '**/node_modules/**',
      // @babel/plugin-transform-runtime + @babel/runtime => 转译helpers外置（复用宿主环境依赖）
      runtimeHelpers: true,
      extensions: ['.js', 'jsx', '.ts', '.tsx']
    }),
    commonjs(),
    postcss({
      // 抽离css 如果为false 则将css注入js文件中 用户无需手动引入样式文件
      extract: true,
      extensions: ['.less']
    })
  ]
};