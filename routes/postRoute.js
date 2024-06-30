import { Router } from 'express';

import { createPost, deletePost, fetchPost, showPost, updatePost } from '../Controller/PostController.js';

const router = Router();

router.get('/',fetchPost)
router.get('/:id', showPost)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete('/:id', deletePost)
export default router;