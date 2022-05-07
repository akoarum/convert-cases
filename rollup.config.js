import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const input = './src/index.ts'

export default [
  {
    input,
    output: [
      {
        file: `./dist/cjs/${pkg.name}.js`,
        sourceMap: 'inline',
        format: 'cjs',
      },
    ],
    plugins: [
      terser(),
      typescript({
        rootDir: 'src',
        declaration: true,
      }),
    ],
  },
  {
    input,
    output: [
      {
        file: `./dist/esm/${pkg.name}.js`,
        sourceMap: 'inline',
        format: 'esm',
      },
    ],
    plugins: [
      terser(),
      typescript({
        rootDir: 'src',
        declaration: true,
      }),
    ],
  },
  {
    input,
    output: [
      {
        file: `./dist/umd/${pkg.name}.js`,
        name: 'camelizeUtils',
        format: 'umd',
      },
    ],
    plugins: [
      terser(),
      nodeResolve({
        rootDir: 'src',
        declaration: true,
      }),
      commonjs(),
      json(),
      typescript(),
    ],
  },
]
