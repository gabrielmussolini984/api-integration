import GetOpportunitiesPipe from '../../services/GetOpportunitiesPipe';
import GetOpportunities from '../../services/GetOpportunities';

export default {
  index: async (req, res) => {
    try {
      const { page = 0, limit = 10 } = req.query;
      const opportunities = await GetOpportunities(Number(page), Number(limit));
      return res.json(opportunities);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.stack });
    }
  },
  store: async (req, res) => {
    try {
      await GetOpportunitiesPipe();
      return res.json({ message: 'Publicado na fila' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.stack || error });
    }
  },
};
