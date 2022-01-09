const mongoose = require("mongoose");

const twovalueSchema = new mongoose.Schema({
    operation: String,
    firstvalue: Number,
    secondvalue: Number,
    result: Number,
  });

const Doubleoperation = mongoose.model("doubleOperation", twovalueSchema);

module.exports = Doubleoperation;