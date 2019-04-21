export const homepage = (req, res) => {
  console.log('what', req.body);
  res.status(200).json('This is The homepage');
};

function fetchData(req) {
  const data = req.headers;
  return {
    fullName: data.fullname,
    age: data.age,
    gender: data.gender,
    email: data.email,
    englishLevel: data.englishlevel,
    location: data.currentcountry,
    localLanguageLevel: data.locallanguagelevel,
    digitalToolsLevel: data.digitaltoolstevel,
    highestDegreeObtained: data.highestdegreeobtained,
    assessYourJobReadiness: data.assessyourjobreadiness,
    gdpr: data.gdpr,
    filledEntrepreneur : data.hasOwnProperty('startyourownbusiness'),
    isEntrepreneur: data.hasOwnProperty('startyourownbusiness') &&
        data.startyourownbusiness === 'yes',
    filledLocation: data.hasOwnProperty('currentcountry'),

  }
}

export const resultData = (req, res) => {
  let result = findInObject(opportunities,{});
  let user = fetchData(req);
  if (user.filledEntrepreneur) {
    if(user.isEntrepreneur) {
      result = findInObject(result,{Theme : 'entrepreneurship and incubation'});
    } else {
      result = findInObject(result,{Theme : 'entrepreneurship and incubation'}, true);
    }
  }
  if(user.filledLocation) {
    result = findInObject(result,{Country : user.location});
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
        return parameter[key] === searchParameter[key] ;
      } else {
        return parameter[key]  !== searchParameter[key] ;
      }
    })
  })
}
