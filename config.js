const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/upload");

const db = mongoose.connection;
function dbCalling() {
  try {
    db.once("open", () => {
      console.log("connected to mongoDB");
    });
  } catch (error) {
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
}
dbCalling();
