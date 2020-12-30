import OpportunityRepository from '../repository/Opportunity';

export default async (page = 0, limit = 10) => {
  try {
    const opportunities = await OpportunityRepository.findAll(page, limit);
    return { opportunities };
  } catch (error) {
    throw new Error(error);
  }
};
