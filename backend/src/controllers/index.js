import { fetchData, getEntrepreneurship } from '../helper';
import opportunities from '../helper/data.json';
export const homepage = (req, res) => {
  res.status(200).json('This is The Api');
};

export const resultData = async (req, res) => {

  const { startYourOwnBusiness } = await req.body;
  try {
    if (startYourOwnBusiness === 'yes') {
      const response = await getEntrepreneurship(opportunities);
      return res.status(200).json({
        data: response
      });
    }
    return res.status(400).json({
      message:
        'We could not find any  data for this search the provide information'
    });
  } catch (e) {
    console.log(e);
  }
};
