import { defineConfig, type Format, type LibConfig, type RslibConfig } from '@rslib/core'

const formats: Format[] = ['esm', 'cjs']
const libConfig: Partial<LibConfig> = {
  dts: true,
  syntax: 'es2020',
  externalHelpers: true,
}

export default defineConfig(
  (): RslibConfig => ({
    lib: formats.map(
      (format, index): LibConfig => ({
        ...libConfig,
        format,
        dts: libConfig?.dts && !index,
      }),
    ),
    resolve: {
      alias: { '@': './src' },
    },
  }),
)
