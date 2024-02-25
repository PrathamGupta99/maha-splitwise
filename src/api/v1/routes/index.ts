import { Router } from 'express';
import Transactions from './expenses/expenses';
import Users from './users/users';
import Groups from './groups/groups';
import userManagement from './userManagement/userManagement';

const router = Router();

router.use('/expense', Transactions);
router.use('/user', Users);
router.use('/group', Groups);
router.use('/', userManagement);

export default router;
