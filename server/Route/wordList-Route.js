const express = require("express");
const data = require("../TestData.json").wordList;
const Router = express.Router();

let filterData = [];

Router.get("/", (req, res, next) => {
  for (let index = 0; index <= 30; index++) {
    if (filterData.length == 10) {
      break;
    }
    const element = data[Math.floor(Math.random() * data.length)];

    if (!filterData.includes(element)) {
      filterData.push(element);
    }

    let check = [];
    if (index === 29) {
      filterData.map((e) => {
        if (e.pos === "noun") {
          return check.push(true);
        }
        if (e.pos === "verb") {
          return check.push(true);
        }
        if (e.pos === "adverb") {
          return check.push(true);
        }
        if (e.pos === "adjective") {
          return check.push(true);
        }
        if (check.length !== 4) {
          index = 0;
        }
      });
    }
  }
  res.json(filterData);
  filterData = [];
});

module.exports = Router;
