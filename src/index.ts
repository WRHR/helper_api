import "reflect-metadata";
import express from "express";
import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const app = express();

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
};

main();
