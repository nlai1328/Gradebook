const express = require("express")
const router = express.Router();
const Grade = require("../models/grademodel") 

router.get("/", async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const grade = new Grade({
    operation: req.body.operation,
    currentGrade: req.body.currentGrade,
    desiredGrade: req.body.desiredGrade,
    weight: req.body.weight,
    result: req.body.result,
  });
  try {
    const savedGrade = await grade.save();
    res.json(savedGrade);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router
