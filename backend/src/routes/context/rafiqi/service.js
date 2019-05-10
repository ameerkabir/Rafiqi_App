import OpportunitiesDao from './dao';

export default class OpportunitiesService {
  constructor() {
    this.opportunitiesDao = new OpportunitiesDao();
  }

  async show(stepId) {
    const step = await this.opportunitiesDao.findOneBy({ stepId });
    return step;
  }

  async findBy(query, set) {
    const steps = await this.opportunitiesDao.findBy(query, set);
    return steps;
  }

  async create(stepsData) {
    return this.opportunitiesDao.create(stepsData);
  }

  async findOneAndUpdate(query, set) {
    return this.opportunitiesDao.findOneAndUpdate(query, set);
  }

  async hardDelete(query) {
    const steps = await this.opportunitiesDao.hardDelete(query);
    return steps;
  }

  async findAll() {
    const steps = await this.opportunitiesDao.findAll();
    return steps;
  }
}
