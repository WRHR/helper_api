import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User],
  user: "w",
  dbName: "helper-db",
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
