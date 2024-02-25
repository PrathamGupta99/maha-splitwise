import { Router } from 'express';
import controllers from '../../controllers';

const router = Router();

router.post('/register', controllers.userManagement.registerUser);

router.post('/login', controllers.userManagement.loginUser);

export default router;
