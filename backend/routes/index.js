const express = require('express');
const router = express.Router();
// const {catchErrors}  = require("../handlers/errorHandler");
// const numberToRoman = require("../controllers/numberToRoman");
const { homepage, postData } = require('../controllers/index');
// const romanToNumber = require('../controllers/romanToNumber')
const api = () => {
  router.get('/', homepage);
  router.post('/data', postData);
  //    router.post("/api/number", romanToNumber);

  return router;
};
module.exports = api;
