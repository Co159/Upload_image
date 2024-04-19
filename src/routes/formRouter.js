const express = require("express");
const { createImg } = require("../api/formapi");
const { upload, uploadmany } = require("../utils/multer");

const formRoutes = express.Router();

formRoutes.post("/create", upload, createImg);
formRoutes.post("/createm", uploadmany, createImg);

module.exports = { formRoutes };
