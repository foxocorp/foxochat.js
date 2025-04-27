import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2020",
      dts: {
        bundle: true,
        autoExtension: true,
      },
    },
    {
      format: "cjs",
      syntax: "es2020",
      dts: {
        bundle: true,
        autoExtension: true,
      },
    },
  ],
});
