import { plugin } from "bun";

await plugin({
  name: "Cypher file loader",
  async setup(build) {
    // when a .cypher file is imported...
    build.onLoad({ filter: /\.(cypher|cql|cyp)$/ }, async (args) => {
      // and returns it as a module
      return {
        exports: { default: await Bun.file(args.path).text() },
        loader: "object", // special loader for JS objects
      };
    });
  },
});
