import {fetchData, filterObject, filteredData} from "../helper";
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
