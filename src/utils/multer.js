

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const server = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname.split(".")[0];
    const extension = path.extname(file.originalname);

    const fileName = originalName + extension;
    const filePath = path.join("./src/uploads", fileName);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (!err) {
        req.imageAlreadyUploaded = true;
      }
      cb(null, fileName);
    });
  },
});

const upload = multer({ storage: storage }).single("user_file");

const uploadmany = multer({ storage: storage }).any('user_file');


module.exports = { upload,uploadmany };
