import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");
const database = drizzle(sqlite);


await migrate(database, { migrationsFolder: "./drizzle" });

export default database