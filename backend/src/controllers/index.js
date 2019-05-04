import {fetchData} from '../helper';
import opportunities from '../helper/data.json';

export const homepage = (req, res) => {
  res.status(200).json('This is The Api');
};

export const resultData = async (req, res) => {

  try {
    const response = await fetchData(req, opportunities);

    if(response.length) {
      return res.status(200).json({
        data: response
      });
    } else {
      return res.status(400).json({
        message:
            'We could not find any data for this search to provide any information'
      });
    }
  } catch (e) {
    console.error(e);
  }
};
