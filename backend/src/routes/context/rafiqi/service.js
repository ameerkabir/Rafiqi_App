import OpportunitiesDao from './dao';

export default class OpportunitiesService {
  constructor() {
    this.opportunitiesDao = new OpportunitiesDao();
  }

  async show(stepId) {
    return await this.opportunitiesDao.findOneBy({stepId});
  }

  async findBy(query, set) {
    return await this.opportunitiesDao.findBy(query, set);
  }

  async create(opportunityData) {
    return this.opportunitiesDao.create(opportunityData);
  }

  async findOneAndUpdate(query, set) {
    return this.opportunitiesDao.findOneAndUpdate(query, set);
  }

  async hardDelete(query) {
      return await this.opportunitiesDao.hardDelete(query);
  }
  async save(query){
    return await this.opportunitiesDao.save(query);
  }

  async findAll() {
    const steps = await this.opportunitiesDao.findAll();
    console.log('opportunities', steps);
    return steps;
  }
}
