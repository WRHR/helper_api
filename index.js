const express = require("express");
const dotenv = require("dotenv");
const MikroORM = require("@mikro-orm/core");

const main = async () => {
  const app = express();

  dotenv.config();

  const orm = await MikroORM.init({
    migrations: {
      path: path.join(__dirname, "./migrations"),
      pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [],
    user: "w",
    dbName: "helper-db",
    type: "postgresql",
  });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
};

main();
