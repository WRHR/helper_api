import "reflect-metadata";
import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
};

main();
