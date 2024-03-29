import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { verifyJwt } from '../../middleware/jwt.middleware';

const router: Router = Router();

router.get('/', verifyJwt, UserController.getAllUsers);
router.get('/:id', verifyJwt, UserController.getUserById);
router.delete('/:id', verifyJwt, UserController.deleteUserById);
router.put('/:id', verifyJwt, UserController.updateUserById);

export default router;