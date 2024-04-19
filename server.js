const express = require("express");
const { Router } = require("./src/routes/index");
const path = require("path");
const server = express();

server.use(Router);

server.use("/uploads", express.static(path.join(__dirname, "src", "uploads"))); //URL use to show img in chrome

server.listen(8000, () => {
  console.log("server is calling on 8000 port");
});
