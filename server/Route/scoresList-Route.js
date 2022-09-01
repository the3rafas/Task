const express = require("express");
const scoreList = require("../TestData.json").scoresList;
const Router = express.Router();
const bodyParser = require("body-parser");

let filterData = [];

Router.post("", (req, res, next) => {
  let value = req.body.score;

  scoreList.push(value);
  scoreList.filter((e) => e < value && filterData.push(e));
  let Rank = (filterData.length / scoreList.length) * 100;
  Rank = 100 - Math.floor(Rank);
  console.log(value);
  res.send(Rank.toString());
  filterData = [];
});

module.exports = Router;
