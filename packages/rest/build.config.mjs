import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index"],
  outDir: "./dist",
  declaration: "compatible",
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
