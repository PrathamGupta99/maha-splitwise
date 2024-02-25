import { Router } from 'express';
import controllers from '../../controllers';
import validateToken from '../../../../middleware/tokenValidationHandler';

const router = Router();

router.use(validateToken);

router.post('/', controllers.groups.createGroup);

router.get('/', controllers.groups.getAllGroups);

router.get('/:group_id', controllers.groups.getGroup);

router.delete('/:group_id', controllers.groups.deleteGroup);

router.patch('/:group_id', controllers.groups.updateGroup);

export default router;
