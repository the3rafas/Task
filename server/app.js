const express = require("express");
const bodyParser = require("body-parser");

const data = require("./Route/wordList-Route");
const score = require("./Route/scoresList-Route");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Orign,X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");

  next();
});

app.use("/", data);
app.use("/result", score);

app.listen(5000);
