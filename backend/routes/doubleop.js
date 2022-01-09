const express = require("express")
const router = express.Router();
const Doubleoperation = require("../models/twovaluemodel") 

router.get("/", async (req, res) => {
  try {
    const doubleops = await Doubleoperation.find();
    res.json(doubleops);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const doubleop = new Doubleoperation({
    operation: req.body.operation,
    firstvalue: req.body.firstvalue,
    secondvalue: req.body.secondvalue,
    result: req.body.result,
  });
  try {
    const savedDoubleop = await doubleop.save();
    res.json(savedDoubleop);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router
