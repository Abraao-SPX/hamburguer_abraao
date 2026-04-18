import { Router } from 'express';
import PedidoController from '../controllers/PedidoController.js';

const router = Router();

router.post('/', PedidoController.create);
router.get('/', PedidoController.findAll);
// Adicione outras rotas se houver outros métodos em PedidoController

export default router;
