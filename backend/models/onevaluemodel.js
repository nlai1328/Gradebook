const mongoose = require("mongoose");

const onevalueSchema = new mongoose.Schema({
  operation: String,
  firstvalue: Number,
  result: String,
});

const Singleoperation = mongoose.model("singleOperation", onevalueSchema);

module.exports = Singleoperation;
