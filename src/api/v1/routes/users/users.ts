import { Router } from 'express';
import controllers from '../../controllers';
import validateToken from '../../../../middleware/tokenValidationHandler';

const router = Router();

router.use(validateToken);
router.get('/', controllers.users.getAllUsers);

router.get('/:user_id', controllers.users.getUser);

router.delete('/:user_id', controllers.users.deleteUser);

router.patch('/:user_id', controllers.users.updateUser);

export default router;
