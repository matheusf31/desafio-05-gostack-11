import { Router } from 'express';
import transactionsRouter from './transaction.routes';

const routes = Router();

/**
 * Sempre que a rota começar com /transaction
 * transactionsRouter será chamado e os métodos lá dentro
 * não precisarão incluir /transaction
 */
routes.use('/transaction', transactionsRouter);

export default routes;
