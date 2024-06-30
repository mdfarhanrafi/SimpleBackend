
import { Router } from 'express';
import { createUser, deleteUser, fetusers, showuser, updateUser } from '../Controller/UserController.js';

const router = Router();

router.get('/', fetusers)
router.get('/:id',showuser)
router.post("/", createUser)
router.put("/:id",updateUser)
router.delete('/:id',deleteUser)
export default router;