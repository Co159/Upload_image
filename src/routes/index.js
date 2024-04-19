const express = require("express");
const { formRoutes } = require("./formRouter");
const Router = express();

Router.use("/image", formRoutes);

module.exports = {
  Router,
};
