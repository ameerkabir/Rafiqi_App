import {propEq, filter, gte, difference, propSatisfies} from 'ramda';

export async function getBody(req){
  let data_ = {};
  const returned = Object.assign(data_, req.body);
  return returned;
}

export async function fetchData(obj, opportunities) {
  const {
    fullName,
    gender,
    email,
    age,
    currentCountry,
    englishLevel,
    digitalToolsLevel,
    localLanguageLevel,
    highestDegreeObtained,
    educationAndWorkBackground,
    assessYourJobReadiness,
    startYourOwnBusiness,
    gdpr
  } = await obj;

  let response = await getCountry(opportunities, currentCountry);

  if (startYourOwnBusiness === 'yes') {
    return await getEntrepreneurship(response);
  }
  response = await excludeEntrepreneurship(response);

  // We have to split the responses to branches here, because at a later time we will have to return to present response
  const jobBranch = await getJob(response);
  const eduBranch = await getEducation(response);
  const trainBranch = await getTraining(response);

  const localJobs = await getLocalJobs(jobBranch, assessYourJobReadiness, educationAndWorkBackground);

  if(localJobs.length) {
    const sufficientLanguage = await filterByLanguage(localJobs, localLanguageLevel, englishLevel);
    if(sufficientLanguage.length) {
      return sufficientLanguage;
    }
    return await getLanguageEducation(response, localLanguageLevel, englishLevel);
  }
  // couldn't find any local jobs opportunities

  const onlineJobs = await getOnlineJobs(jobBranch, assessYourJobReadiness, educationAndWorkBackground);

  if(onlineJobs.length) {
    if(digitalToolsLevel >= 7) {
      if(englishLevel >= 7 ){
        return onlineJobs;
      }
      return await getEnglishEducation(response);
    }
    return await getDigitalEducation(response);
  }
  // couldn't find any online jobs opportunities

  if(highestDegreeObtained === 'none') {
    return await getBachelorDegree(eduBranch);
  } else {
    const trainingAndEducation = [...eduBranch, ...trainBranch];
    const localTrainAndEdu = await getLocalDelivery(trainingAndEducation);
    if(localTrainAndEdu.length) {
      const sufficientLanguage = await filterByLanguage(localTrainAndEdu, localLanguageLevel, englishLevel);
      if(sufficientLanguage.length) {
        const closestBackground = await getClosestResults(sufficientLanguage);
        if(closestBackground.length) {
          return closestBackground;
        } else {
          return await getBeginnerTraining(response);
        }
      } else {
        return await getLanguageEducation(response, localLanguageLevel, englishLevel);
      }
    } else {
      const onlineTrainAndEdu = await getOnlineDelivery(trainingAndEducation);
      if(onlineTrainAndEdu.length) {
        if(digitalToolsLevel >= 7) {
          if(englishLevel >= 7 ){
            const closestBackground = await getClosestResults(onlineTrainAndEdu);
            if(closestBackground.length) {
              return closestBackground;
            } else {
              return await getBeginnerTraining(response);
            }
          }
          return await getEnglishEducation(response);
        }
        return await getDigitalEducation(response);
      }
    }
  }
  // couldn't find any training and education opportunities

  return [];
}

export async function filterResponse(opportunities, relation, key, value, exclude = false) {
  try {
    const result = await filter(
        relation(key, value),
        opportunities
    );
    if(exclude)
      return difference(opportunities, result);
    else
      return result;
  } catch (e) {
    console.error(e);
    return 'parameter opportunities are missing, Please call the function with data.';
  }
}

export async function getCountry(opportunities, countryQuery) {
  const country = await filterResponse(opportunities, propEq, 'country', countryQuery);
  const global = await filterResponse(opportunities, propEq, 'country', 'Global');
  return global.concat(country);
}

export async function getEntrepreneurship(opportunities) {
  return await filterResponse(opportunities,  propEq , 'theme', 'entrepreneurship and incubation');
}

async function excludeEntrepreneurship(opportunities) {
  return await filterResponse(opportunities, propEq, 'theme', 'entrepreneurship and incubation', true);
}

export async function getJob(opportunities) {
  return await filterResponse(opportunities, propEq, 'category', 'Job');
}

async function getEducation(opportunities) {
  return await filterResponse(opportunities, propEq, 'category', 'University Degree');
}

async function getTraining(opportunities) {
  const training = await filterResponse(opportunities, propEq, 'category', 'Training');
  const certified = await filterResponse(opportunities, propEq, 'category', 'Certified Training');
  return [...training, ...certified];
}

export async function getLocalJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const localJobs = await getLocalDelivery(opportunities);
  let suitableJobs = await filterResponse(localJobs, criteria, 'level', applicantLevel);
  if(background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

export async function getSameBackground(opportunities, cluster) {
  const background = await filterResponse(opportunities, propEq, 'cluster_nb', cluster);
  const notApplicable = await filterResponse(opportunities, propEq, 'cluster_nb', 'not applicable');
  return [...background,...notApplicable];
}

async function getOnlineJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const onlineJobs = await getOnlineDelivery(opportunities);
  let suitableJobs = await filterResponse(onlineJobs, criteria, 'level', applicantLevel);
  if(background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

async function getLanguageEducation(opportunities, localLanguageLevel, englishLevel) {
  const languageEducation = await filterResponse(opportunities, propEq, 'theme', 'language education');
  let integration = await filterResponse(opportunities, propEq, 'theme', 'integration');
  integration = await filterByLanguage(integration, localLanguageLevel, englishLevel);
  return [...integration, ...languageEducation];
}

async function filterByLanguage(opportunities, localLanguageLevel, englishLevel) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  let suitableByLanguage = await filterResponse(opportunities, criteria, 'local_lan_requirements', localLanguageLevel);
  suitableByLanguage = await filterResponse(suitableByLanguage, criteria, 'en_requirements', englishLevel);
  return suitableByLanguage;
}

async function getEnglishEducation(opportunities) {
  const englishEducation = await filterResponse(opportunities, propEq, 'theme', 'English education');
  return englishEducation;
}

async function getDigitalEducation(opportunities) {
  const localEducation = await getLocalDelivery(opportunities);
  return await filterResponse(localEducation, propEq, 'theme', 'Digital education');
}

async function getLocalDelivery(opportunities) {
  return await filterResponse(opportunities, propEq, 'mode_of_delivery', 'online', true);
}

async function getOnlineDelivery(opportunities) {
  return await filterResponse(opportunities, propEq, 'mode_of_delivery', 'online');
}

async function getBachelorDegree(education) {
  return await getBeginnerLevel(education);
}

async function getBeginnerTraining(opportunities) {
  const training = await getTraining(opportunities);
  return await getBeginnerLevel(training);
}

async function getBeginnerLevel(opportunities) {
  return await filterResponse(opportunities, propEq, 'level', '1');
}

async function excludeBeginnerLevel(opportunities) {
  return await filterResponse(opportunities, propEq, 'level', '1', true);
}

async function getClosestResults(opportunities) {
  const notBeginnerResults = await excludeBeginnerLevel(opportunities);
  // TODO Filter by the distance function that will be added later.
  return notBeginnerResults;
}