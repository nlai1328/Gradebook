const express = require("express")
const router = express.Router();
const Sets = require("../models/setsmodel") 

router.get("/", async (req, res) => {
  try {
    const set = await Sets.find();
    res.json(set);
  } catch (err) {
    res.json({ message: err});
  }
});

router.post("/", async (req, res) => {
  const sets = new Sets({
    operation: req.body.operation,
    firstvalue: req.body.firstvalue,
    secondvalue: req.body.secondvalue,
    result: req.body.result,
  });
  try {
    const savedset = await sets.save();
    res.json(savedset);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router
