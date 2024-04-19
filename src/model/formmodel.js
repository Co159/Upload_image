const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const formmodel = mongoose.model("students", formSchema);
module.exports = formmodel;
