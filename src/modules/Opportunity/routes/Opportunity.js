import { Router } from 'express';
import OpportunityController from '../controller/Opportunity';

const router = new Router();

router.get('/', OpportunityController.index);
router.post('/', OpportunityController.store);

export default router;
