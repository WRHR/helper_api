const express = require("express");
const dotenv = require("dotenv");



const main = () => {
  const app = express();

  dotenv.config()


  const PORT = process.env.PORT || 8000
  app.listen( PORT, ()=>console.log(`Server is running on port: ${PORT}...`));
};

main();
