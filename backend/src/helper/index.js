import { propEq } from 'ramda';

export function findInObject(data, searchParameter, exclude) {
  exclude = exclude || false;
  return JSON.parse(JSON.stringify(data)).filter(function(parameter) {
    return Object.keys(searchParameter).every(function(key) {
      if (!exclude) {
        return parameter[key] === searchParameter[key];
      } else {
        return parameter[key] !== searchParameter[key];
      }
    });
  });
}

export function fetchData(req) {
  const data = req.body;
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
    filledEntrepreneur: data.hasOwnProperty('startyourownbusiness'),
    isEntrepreneur:
      data.hasOwnProperty('startyourownbusiness') &&
      data.startyourownbusiness === 'yes',
    filledLocation: data.hasOwnProperty('currentcountry')
  };
}

export async function getEntrepreneurship(opportunities) {
  try {
    const result = await opportunities.filter(
      propEq('Theme', 'entrepreneurship and incubation')
    );
    return result;
  } catch (e) {
    return 'parameter opportunities  is missing, Please call the function with data';
  }
}
