import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController.js';

const router = Router();

router.get('/', AvaliacaoController.findAll);
router.get('/:id', AvaliacaoController.findById);
router.post('/', AvaliacaoController.create);
router.put('/:id', AvaliacaoController.update);
router.delete('/:id', AvaliacaoController.delete);

export default router;
