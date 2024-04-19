const express = require("express");
const multer = require("multer");
const server = express();
const form = require("../model/formmodel");
server.use(express.json());

const createImg = async (req, res) => {
  try {
    const file = req.file;
    if (req.imageAlreadyUploaded) {
      return res
        .status(200)
        .json({ status: false, message: "Image is already uploaded" });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "File uploaded successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = {
  createImg
};
