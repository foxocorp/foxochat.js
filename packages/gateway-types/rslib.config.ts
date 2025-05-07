import { defineConfig, type LibConfig, type Format, type RslibConfig } from "@rslib/core";

const formats: Format[] = ["esm", "cjs"];
const libConfig: Partial<LibConfig> = { dts: true, syntax: "es2020" };

export default defineConfig(
  (): RslibConfig => ({
    lib: formats.map((format): LibConfig => ({ ...libConfig, format })),
    resolve: {
      alias: { "#": "./src" },
    },
  }),
);
