const opportunities = require('../helper/data.json');

const homepage = (req, res) => {
  console.log('what', req.body);
  res.status(200).json('This is The homepage');
};

const postData = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    data: req.body
  });
};

function fetchData(req) {
  var data = req.headers;
  return {
    fullName: data.fullName,
    age: data.age,
    gender: data.gender,
    email: data.email,
    englishLevel: data.englishLevel,
    localLanguageLevel: data.localLanguageLevel,
    digitalToolsLevel: data.digitalToolsLevel,
    highestDegreeObtained: data.highestDegreeObtained,
    assessYourJobReadiness: data.assessYourJobReadiness,
    gdpr: data.gdpr,
    filledEntrepreneur : data.hasOwnProperty('startyourownbusiness'),
    isEntrepreneur: data.hasOwnProperty('startyourownbusiness') &&
        data.startyourownbusiness === 'yes'
  }
}

const resultData = (req, res) => {
  var result = findInObject(opportunities,{});
  var user = fetchData(req);
  if (user.filledEntrepreneur) {
    if(user.isEntrepreneur) {
      result = findInObject(result,{Theme : 'entrepreneurship and incubation'});
    } else {
      result = findInObject(result,{Theme : 'entrepreneurship and incubation'}, true);
    }
  }

  res.status(200).json({
    data: result
  });
};

function findInObject(data, searchParameter, exclude){
  exclude = exclude || false;
  return JSON.parse(JSON.stringify(data)).filter(function (parameter) {
    return Object.keys(searchParameter).every(function (key) {
      if (!exclude){
        return parameter[key] === searchParameter[key];
      } else {
        return parameter[key] !== searchParameter[key];
      }
    })
  })
}
module.exports = { homepage, postData, resultData };
