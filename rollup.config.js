// @ts-check
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { defineConfig } from "rollup";

/**
 * @param {Omit<import('rollup').RollupOptions, 'input' | 'external' | 'plugins'>} config
 * @param {import('rollup').Plugin[]} plugins
 * @return {import('rollup').RollupOptions}
 **/
const createOutputBundle = (config, plugins) => ({
  ...config,
  plugins,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

/**
 * @type {import('rollup').RollupOptions[]}
 **/
const config = [
  createOutputBundle(
    {
      output: [
        {
          file: "dist/index.cjs.js",
          format: "cjs",
          sourcemap: true,
        },
        {
          file: "dist/index.esm.js",
          format: "es",
          sourcemap: true,
        },
      ],
    },
    [esbuild()]
  ),
  createOutputBundle(
    {
      output: {
        file: "dist/index.d.ts",
        format: "es",
      },
    },
    [dts()]
  ),
];

export default defineConfig(config);
