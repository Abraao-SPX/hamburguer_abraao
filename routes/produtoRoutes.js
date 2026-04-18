import { Router } from 'express';
import * as ProdutoController from '../controllers/ProdutoController.js';

const router = Router();

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.obterPorId);
router.post('/', ProdutoController.criar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

export default router;
