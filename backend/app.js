const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const SingleopRouter = require("./routes/singleop");
const DoubleopRouter = require("./routes/doubleop");
const SetRouter = require("./routes/sets");
const GradeRouter = require("./routes/grade");

const app = express();
const port = process.env.PORT || 4000 

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://nlai1328:bbonak1328@cluster0.9vwtf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(port, () => console.log("Listening on port 4000"));

app.use("/singleop", SingleopRouter);
app.use("/doubleop", DoubleopRouter);
app.use("/sets", SetRouter);
app.use("/grade", GradeRouter);
