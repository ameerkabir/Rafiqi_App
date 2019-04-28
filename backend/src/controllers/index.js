import { fetchData, getEntrepreneurship } from '../helper';
import opportunities from '../helper/data.json';
export const homepage = (req, res) => {
  res.status(200).json('This is The Api');
};

export const resultData = async (req, res) => {
  console.log(req.body);
  const { startYourOwnBusiness } = await req.body;
  try {
    if (startYourOwnBusiness) {
      const response = await getEntrepreneurship(opportunities);
      return res.status(200).json({
        data: response
      });
    }
    return res.json(400).json({
      message:
        'We could not find any  data for this search the provide information'
    });
  } catch (e) {
    res.send(e);
  }
};
