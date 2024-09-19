import init from "@queries/data.cql";
import { trx } from "db";

const array = init.trim().split(";").filter(Boolean);

await Promise.all(
  array.map((query) => {
    return trx(query);
  })
);
console.log("Done");
process.exit();
