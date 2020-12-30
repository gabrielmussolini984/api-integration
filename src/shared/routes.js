import { Router } from 'express';
import OpportunityRoutes from '../modules/Opportunity/routes/Opportunity';

const router = new Router();
router.use('/opportunities', OpportunityRoutes);
router.get('/', (req, res) => res.send('New Router'));
export default router;
