import { uniq, pipe } from 'ramda';
import { fetchData, getEntrepreneurship } from '../helper';
import opportunities from '../helper/data.json';
import RafiqiContext from '../routes/context/rafiqi';
export const homepage = (req, res) => {
  res.status(200).json('This is  Api');
};

export const getOpportunities = async (req, res) => {
  try {
    // const { _id, data } = req.body;
    const opportunities = await RafiqiContext.findAll();
    return res.status(200).json({
      opportunities
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
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

export const CreateOpportunities = async (req, res) => {
  try {
    const opportunity = await RafiqiContext.create(req.body);
    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const EditOpportunities = async (req, res) => {
  try {
    const { _id, data } = req.body;
    const opportunity = await RafiqiContext.findOneAndUpdate({ _id }, data);
    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
export const getOpportunity = async (req, res) => {
  try {
    const _id = req.params.id;
    const opportunity = await RafiqiContext.findBy({ _id });
    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const countUniq = async (req, res) => {
  console.log('is it here');
  try {
    const lengthOfUniqOpportunities = uniq(opportunities);
    return res.status(200).json({
      lengthOfUniqOpportunities: lengthOfUniqOpportunities.length
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
