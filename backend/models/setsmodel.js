const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
    operation: String,
    firstvalue: String,
    secondvalue: String,
    result: String,
  }); 


const Sets = mongoose.model("set", setSchema);

module.exports = Sets;