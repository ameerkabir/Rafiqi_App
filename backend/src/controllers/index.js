import {fetchData, findInObject} from "../helper";
const opportunities = require('../helper/data.json');

export const homepage = (req, res) => {
  console.log('what', req.body);
  res.status(200).json('This is The homepage');
};


export const resultData = (req, res) => {
  let result = findInObject(opportunities,{});
  let user = fetchData(req);
  if(user.filledLocation) {
    result = findInObject(result,{Country : user.location});
  }

  if (user.filledEntrepreneur && user.isEntrepreneur) {
    result = findInObject(result,{Theme : 'entrepreneurship and incubation'});
    res.status(200).json({
    data: result
    });
  } else {
      res.status(400);
      res.send('Sorry for the message, there is no matched opportunity');
  }
};


