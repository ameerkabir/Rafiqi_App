import Dao from '../../../lib/dao';
import OpportunitiesModel from './schema';

export default class OpportunitiesModelDao extends Dao {
  constructor() {
    super(OpportunitiesModel);
  }

  async create(set) {
    console.log('what is going on', OpportunitiesModel)
    const opportunitiesModel = new OpportunitiesModel(set);
    return opportunitiesModel.save();
  }
}
