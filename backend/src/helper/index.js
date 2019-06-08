import { propEq, filter, gte, difference, propSatisfies } from 'ramda';

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
  const HIGHEST_DEGREE_OBTAINED = highestDegreeObtained && Number(highestDegreeObtained);
  const EDUCATION_AND_WORK_BACKGROUND = educationAndWorkBackground && Number(educationAndWorkBackground);
  const ASSESS_YOUR_JOB_READINESS = assessYourJobReadiness && Number(assessYourJobReadiness);

  console.info('primitive', typeof HIGHEST_DEGREE_OBTAINED);
  // console.info('this is the body ', req.body);

  let response = await getCountry(opportunities, currentCountry);

  if (startYourOwnBusiness === 'yes') {
    return await getEntrepreneurship(response);
  }
  response = await excludeEntrepreneurship(response);

  // We have to split the responses to branches here, because at a later time we will have to return to present response
  const jobBranch = await getJob(response);
  const eduBranch = await getEducation(response);
  const trainBranch = await getTraining(response);

  const localJobs = await getLocalJobs(
    jobBranch,
    assessYourJobReadiness,
    educationAndWorkBackground
  );

  if (localJobs.length) {
    const sufficientLanguage = await filterByLanguage(
      localJobs,
      localLanguageLevel,
      englishLevel
    );
    if (sufficientLanguage.length) {
      return sufficientLanguage;
    }
    return await getLanguageEducation(response);
  }

  const onlineJobs = await getOnlineJobs(
    jobBranch,
    assessYourJobReadiness,
    educationAndWorkBackground
  );

  if (onlineJobs.length) {
    if (digitalToolsLevel >= 7) {
      if (englishLevel >= 7) {
        return onlineJobs;
      }
      return await getEnglishEducation(response);
    }
    return await getDigitalEducation(response);
  }

  return [];
}

export async function filterResponse(
  opportunities,
  relation,
  key,
  value,
  exclude = false
) {
  try {
    const result = await filter(relation(key, value), opportunities);
    if (exclude) return difference(opportunities, result);
    else return result;
  } catch (e) {
    console.error(e);
    return 'parameter opportunities are missing, Please call the function with data.';
  }
}

async function getCountry(opportunities, countryQuery) {
  const country = await filterResponse(
    opportunities,
    propEq,
    'country',
    countryQuery
  );
  const global = await filterResponse(
    opportunities,
    propEq,
    'country',
    'Global'
  );
  return Object.assign(global, country);
}

async function getEntrepreneurship(opportunities) {
  return await filterResponse(
    opportunities,
    propEq,
    'theme',
    'entrepreneurship and incubation'
  );
}

async function excludeEntrepreneurship(opportunities) {
  return await filterResponse(
    opportunities,
    propEq,
    'theme',
    'entrepreneurship and incubation',
    true
  );
}

async function getJob(opportunities) {
  return await filterResponse(opportunities, propEq, 'category', 'Job');
}

async function getEducation(opportunities) {
  return await filterResponse(
    opportunities,
    propEq,
    'category',
    'University Degree'
  );
}

async function getTraining(opportunities) {
  const training = await filterResponse(
    opportunities,
    propEq,
    'category',
    'Training'
  );
  const certified = await filterResponse(
    opportunities,
    propEq,
    'category',
    'Certified Training'
  );
  return Object.assign(training, certified);
}

async function getLocalJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const localJobs = await getLocalDelivery(opportunities);
  let suitableJobs = await filterResponse(
    localJobs,
    criteria,
    'level',
    applicantLevel
  );
  if (background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

async function getSameBackground(opportunities, cluster) {
  const background = await filterResponse(
    opportunities,
    propEq,
    'cluster_nb',
    cluster
  );
  const notApplicable = await filterResponse(
    opportunities,
    propEq,
    'cluster_nb',
    'not applicable'
  );
  return Object.assign(notApplicable, background);
}

async function getOnlineJobs(opportunities, applicantLevel, background) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  const onlineJobs = await filterResponse(
    opportunities,
    propEq,
    'mode_of_delivery',
    'online'
  );
  let suitableJobs = await filterResponse(
    onlineJobs,
    criteria,
    'level',
    applicantLevel
  );
  if (background)
    suitableJobs = await getSameBackground(suitableJobs, background);
  return suitableJobs;
}

async function getLanguageEducation(opportunities) {
  const languageEducation = await filterResponse(
    opportunities,
    propEq,
    'theme',
    'language education'
  );
  const integration = await filterResponse(
    opportunities,
    propEq,
    'theme',
    'integration'
  );
  return Object.assign(integration, languageEducation);
}

async function filterByLanguage(
  opportunities,
  localLanguageLevel,
  englishLevel
) {
  const criteria = (k, v) => propSatisfies(gte(v), k);
  let suitableByLanguage = await filterResponse(
    opportunities,
    criteria,
    'local_lan_requirements',
    localLanguageLevel
  );
  suitableByLanguage = await filterResponse(
    suitableByLanguage,
    criteria,
    'en_requirements',
    englishLevel
  );
  return suitableByLanguage;
}

async function getEnglishEducation(opportunities) {
  const languageEducation = await filterResponse(
    opportunities,
    propEq,
    'theme',
    'language education'
  );
  const integration = await filterResponse(
    opportunities,
    propEq,
    'theme',
    'integration'
  );
  return Object.assign(integration, languageEducation);
}

async function getDigitalEducation(opportunities) {
  const localEducation = await getLocalDelivery(opportunities);
  return await filterResponse(
    localEducation,
    propEq,
    'theme',
    'Digital education'
  );
}

async function getLocalDelivery(opportunities) {
  return await filterResponse(
    opportunities,
    propEq,
    'mode_of_delivery',
    'online',
    true
  );
}
