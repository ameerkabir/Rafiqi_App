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
    const opportunities = await RafiqiContext.findAll();
    const response = await fetchData(req, opportunities);
    if (response.length) {
      return res.status(200).json({
        data: response
      });
    } else {
      return res.status(201).json({
        message:
          'No opportunity suitable to your profile was found. We will contact in the future if a suitable opportunity comes up'
      });
    }
  } catch (e) {
    console.error(e);
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
  try {
    const lengthOfUniqOpportunities = uniq(opportunities);
    return res.status(200).json({
      lengthOfUniqOpportunities: lengthOfUniqOpportunities.length
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
