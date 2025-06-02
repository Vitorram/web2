import { Router } from 'express';
import * as controller from '../controllers/categoryController.js';

const router = Router();

router.get('/', controller.getList);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
