import {fetchData, filterObject, searchFor, mergeObject, filterByFunction} from "../helper";
import opportunities from '../helper/data.json';

export const homepage = (req, res) => {
  console.log('Homepage:', req);
  res.status(200).json('This is The homepage');
};

export const resultData = (req, res) => {
  console.log('Request:', req.query);
  let result = filterObject(opportunities,{});
  let user = fetchData(req);

  result = filteredData(user, result);

  if(result.length > 0) {
    console.log(result.length, 'Results Found.');
    res.status(200).json({
      data: result
    });
  } else {
    console.log('No Results Found.');
    res.status(400);
    res.send('Sorry for the message, there is no matched opportunity');
  }
};

function filteredData(user, result) {

  // First filter the location of the user - Global OR country
  if(user.filledLocation)
    result = mergeObject(result, searchFor(user).country, searchFor(user).global);

  // Filter interest in entrepreneurship
  if (user.filledEntrepreneur)
    if(user.isEntrepreneur) {
      result = filterObject(result, searchFor(user).enrepreneur);
      return result; // Exit from function
    } else {
      result = filterObject(result, searchFor(user).enrepreneur, true);

    }

  // We can create filter than apply at last to the data to make it efficient
  /*const filter = {
    ...searchFor(user).job,
    ...searchFor(user).onsite
  };*/

  // Split result to branches by category
  let jobBranch = filterObject(result, searchFor(user).job);
  let eduBranch = filterObject(result, searchFor(user).edu);
  let trainBranch = filterObject(result, searchFor(user).tra);

  // set mode of delivery, whether onsite or hybrid
  jobBranch = mergeObject(jobBranch, searchFor(user).hybrid, searchFor(user).onsite);

  // Filter, level <= applicant job readiness level
  jobBranch = filterByFunction(jobBranch, searchFor(user).jobLevel, (dataVal, searchVal) => dataVal <= searchVal);

  // Filter, language levels <= candidate language levels.
  // English Language Levels
  jobBranch = filterByFunction(jobBranch, searchFor(user).engLevel, (dataVal, searchVal) => dataVal <= searchVal);
  // Local Language Levels
  jobBranch = filterByFunction(jobBranch, searchFor(user).locLevel, (dataVal, searchVal) => dataVal <= searchVal);

  // Filter which background matches their work background
  jobBranch = filterObject(jobBranch, searchFor(user).background);

  //if(jobBranch.length > 0)
    result = jobBranch;
  //else if(eduBranch.length > 0)
  //  result = eduBranch;
  //else
  //  result = trainBranch;

  return result;
}

