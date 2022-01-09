const express = require("express")
const router = express.Router();
const Singleoperation = require("../models/onevaluemodel") 

router.get("/", async (req, res) => {
  try {
    const singleops = await Singleoperation.find();
    res.json(singleops);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const singleop = new Singleoperation({
    operation: req.body.operation,
    firstvalue: req.body.firstvalue,
    result: req.body.result,
  });
  try {
    const savedSingleop = await singleop.save();
    res.json(savedSingleop);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router
