import Opportunity from '../model/Opportunity';

export default {
  findAndUpdateOrCreate: async ({ date, amount }) => {
    try {
      const opportunity = await Opportunity.findOne({ date });
      if (!opportunity || opportunity.length === 0) {
        await Opportunity.create({ date, amount });
        return { message: 'New data' };
      }
      await Opportunity.updateOne(
        { date },
        { amount: opportunity.amount + amount }
      );
      return { message: 'Data updated' };
    } catch (error) {
      throw new Error(error);
    }
  },
  findAll: async (page, limit) => {
    try {
      const opportunities = await Opportunity.find(
        {},
        { amount: 1, date: 1, _id: 0 },
        {
          limit,
          skip: page * limit,
          sort: { createdAt: 'asc' },
        }
      );
      return opportunities;
    } catch (error) {
      throw new Error(error);
    }
  },
};
