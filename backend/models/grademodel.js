const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    operation: String,
    currentGrade: Number,
    desiredGrade: Number,
    weight: Number,
    result: Number,
  });

const Grade = mongoose.model("grade", gradeSchema);

module.exports = Grade;