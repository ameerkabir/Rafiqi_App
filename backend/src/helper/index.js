import {propEq, filter, gte, difference, propSatisfies} from 'ramda';

export async function fetchData(req, opportunities) {
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
  } = await req.body;

  console.log("\nFetching Data\n");
  let response = await getCountry(opportunities, currentCountry);

  if (startYourOwnBusiness === 'yes') {
    console.log("entrepreneurship and incubation search");
    return await getEntrepreneurship(response);
  }
  response = await excludeEntrepreneurship(response);

  const jobBranch = await getJob(response);
  const localJobs = await getLocalJobs(jobBranch, assessYourJobReadiness, educationAndWorkBackground);

  if(localJobs.length) {
    const sufficientLanguage = await filterByLanguage(localJobs, localLanguageLevel, englishLevel);
    if(sufficientLanguage.length) {
      console.log("job found in location!");
      return sufficientLanguage;
    }
    console.log("applicant can find a job locally if he/she enhances his/her language skills");
    return await getLanguageEducation(response);
  }
  // couldn't find any local jobs opportunities

  const onlineJobs = await getOnlineJobs(jobBranch, assessYourJobReadiness, educationAndWorkBackground);

  if(onlineJobs.length) {
    console.log("online job found!");
    const sufficientEnglish = englishLevel >= 7;
    const sufficientDigitalSkills = digitalToolsLevel >= 7;
    let education = [];
    if(!sufficientEnglish) {
      console.log("applicant english level is not enough");
      education = [...await getEnglishEducation(response), ...education]
    }
    if(!sufficientDigitalSkills) {
      console.log("applicant digital skills are not enough");
      education = [...education, ...await getDigitalEducation(response)]
    }
    if(education.length) {
      return education;
    }
    return onlineJobs;
  }
  console.log("no Job found"); // couldn't find any online jobs opportunities

  const eduBranch = await getEducation(response);
  const trainBranch = await getTraining(response);
  console.log("applicant needs trainings or superior university education");
  if(highestDegreeObtained === 'none') {
    return await getBachelorDegree(eduBranch);
  } else {
    const trainingAndEducation = [...eduBranch, ...trainBranch];
    const localTrainAndEdu = await getLocalDelivery(trainingAndEducation);
    const themeFiltered = await excludeIntegration(localTrainAndEdu);
    if(themeFiltered.length) {
      console.log("training opportunity found in location!");
      const sufficientLanguage = await filterByLanguage(themeFiltered, localLanguageLevel, englishLevel);
      if(sufficientLanguage.length) {
        const closestBackground = await getClosestResults(sufficientLanguage);
        if(closestBackground.length) {
          console.log("trainings in different domains but with basic entry requirements are suggested");
          return closestBackground;
        } else {
          return await getBeginnerTraining(response);
        }
      } else {
        return await getLanguageEducation(response);
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
  console.log("Nothing found!"); // couldn't find any training and education opportunities
  return [];
}

export async function filterResponse(opportunities, relation, key, value, exclude = false) {
  let desc = ("\tFilter: "+key.toString()+(exclude?" !":" ")+"= "+value.toString()+" [ => ] "+opportunities.length+" >>");
  try {
    const result = await filter(
        relation(key, value),
        opportunities
    );
    if(exclude) {
      console.log(desc, (opportunities.length-result.length));
      return difference(opportunities, result);
    } else {
      console.log(desc, result.length);
      return result;
    }
  } catch (e) {
    console.error(e);
    return 'parameter opportunities are missing, Please call the function with data.';
  }
}

async function getCountry(opportunities, countryQuery) {
  const country = await filterResponse(opportunities, propEq, 'country', countryQuery);
  const global = await filterResponse(opportunities, propEq, 'country', 'Global');
  return [...global, ...country];
}

async function getEntrepreneurship(opportunities) {
  return await filterResponse(opportunities,  propEq , 'theme', 'entrepreneurship and incubation');
}

async function excludeEntrepreneurship(opportunities) {
  return await filterResponse(opportunities, propEq, 'theme', 'entrepreneurship and incubation', true);
}

async function getJob(opportunities) {
  return await filterResponse(opportunities, propEq, 'category', 'Job');
}

async function getEducation(opportunities) {
  return await filterResponse(opportunities, propEq, 'category', 'University Degree');
}

async function getTraining(opportunities) {
  const training = await filterResponse(opportunities, propEq, 'category', 'Training');
  const certified = await filterResponse(opportunities, propEq, 'category', 'Certified Training');
  const weekend = await filterResponse(opportunities, propEq, 'category', 'Weekend Training');
  return [...training, ...certified, ...weekend];
}

async function getLocalJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const localJobs = await getLocalDelivery(opportunities);
  let suitableJobs = await filterResponse(localJobs, criteria, 'level', applicantLevel);
  if(background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

async function getSameBackground(opportunities, cluster) {
  const background = await filterResponse(opportunities, propEq, 'cluster_nb', cluster);
  const notApplicable = await filterResponse(opportunities, propEq, 'cluster_nb', 'not applicable');
  return [...notApplicable, ...background];
}

async function getOnlineJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const onlineJobs = await getOnlineDelivery(opportunities);
  let suitableJobs = await filterResponse(onlineJobs, criteria, 'level', applicantLevel);
  if(background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

async function getLanguageEducation(opportunities) {
  const languageEducation = await filterResponse(opportunities, propEq, 'theme', 'language education');
  const integration = await filterResponse(opportunities, propEq, 'theme', 'integration');
  return [...integration, ...languageEducation];
}

async function filterByLanguage(opportunities, localLanguageLevel, englishLevel) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  let suitableByLanguage = await filterResponse(opportunities, criteria, 'local_lan_requirements', localLanguageLevel);
  suitableByLanguage = await filterResponse(suitableByLanguage, criteria, 'en_requirements', englishLevel);
  return suitableByLanguage;
}

async function getEnglishEducation(opportunities) {
  const LanguageEducation = await filterResponse(opportunities, propEq, 'theme', 'language education');
  const EnglishEducation = await filterResponse(opportunities, propEq, 'theme', 'English education');
  const integration = await filterResponse(opportunities, propEq, 'theme', 'integration');
  return [...integration, ...EnglishEducation, ...LanguageEducation];
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
  return await await getBeginnerLevel(education);
}

async function getBeginnerTraining(opportunities) {
  const training = await getTraining(opportunities);
  return await getBeginnerLevel(training);
}

async function getBeginnerLevel(opportunities) {
  return await filterResponse(opportunities, propEq, 'level', 1);
}

async function excludeBeginnerLevel(opportunities) {
  return await filterResponse(opportunities, propEq, 'level', 1, true);
}

async function getClosestResults(opportunities) {
  const notBeginnerResults = await excludeBeginnerLevel(opportunities);
  // TODO Filter by the distance function that will be added later.
  return notBeginnerResults;
}

async function excludeIntegration(opportunities) {
  //const languageEducation = await filterResponse(opportunities, propEq, 'theme', 'language education', true);
  return await filterResponse(opportunities, propEq, 'theme', 'integration', true);
}