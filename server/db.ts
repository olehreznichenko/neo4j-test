import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  Bun.env.NEO4J_URL!,
  neo4j.auth.basic(Bun.env.NEO4J_USERNAME!, Bun.env.NEO4J_PASSWORD!)
);

export async function query(query: string, params?: Record<string, unknown>) {
  const session = driver.session();
  const result = await session.run(query, params);
  await session.close();
  return result;
}

export async function trx(query: string, params?: Record<string, unknown>) {
  const session = driver.session();
  const tx = session.beginTransaction();
  try {
    const result = await tx.run(query, params);
    await tx.commit();
    return result;
  } catch (error) {
    console.error("Error executing transaction:", error);
    await tx.rollback();
  } finally {
    await session.close();
  }
}

process.on("SIGINT", () => {
  console.log("Ctrl-C was pressed");
  driver.close();
  process.exit();
});
