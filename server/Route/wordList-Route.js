const express = require("express");
const data = require("../TestData.json").wordList;
const Router = express.Router();

let filterData = [];

Router.get("/", (req, res, next) => {
  for (let index = 0; index <= 20; index++) {
    if (filterData.length == 10) {
      break;
    }
    const element = data[Math.floor(Math.random() * data.length)];

    if (!filterData.includes(element)) {
      filterData.push(element);
    }

    let check = [];
    if (index === 19) {
      filterData.map((e) => {
        if (e.pos === "noun") {
          return check.push(true);
        } else if (e.pos === "verb") {
          return check.push(true);
        } else if (e.pos === "adverb") {
          return check.push(true);
        } else if (e.pos === "adjective") {
          return check.push(true);
        } else {
          return check.push(false);
        }
      });
      if (check.includes(false)) {
        index = 0;
      }
    }
  }

  res.json(filterData);
  filterData = [];
});

module.exports = Router;
