export default {
    input: "src/index.js",
    output: [
      { file: "dist/quickey.esm.js", format: "esm" },
      { file: "dist/quickey.cjs.js", format: "cjs" }
    ]
  };
  