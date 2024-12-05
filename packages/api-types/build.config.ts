// @ts-expect-error
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index", "./src/v1"],
  outDir: "./dist",
  declaration: "compatible",
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
