/**
 * Não tem responsabilidade pelo formato dos dados e nem pela maneira como eles são armazenados
 */

import { Router } from 'express';

import TransactionsRepository from '../repository/TransactionsRepository';

const transactionsRouter = Router();
const transactionRepository = new TransactionsRepository();

let total = 0;

transactionsRouter.post('/', (req, res) => {
  const { title, value, type } = req.body;

  // acho que aqui irá o método getBalance
  if (type === 'outcome') {
    if (value > total) {
      return res.status(400).json({
        error: 'The value goes beyond the total amount the user has in cash',
      });
    }
  }

  const transaction = transactionRepository.create(title, value, type);

  return res.json(transaction);
});

transactionsRouter.get('/', (req, res) => {
  const income: number = transactions.reduce((sum, element) => {
    if (element.type === 'income') {
      return sum + element.value;
    }

    return sum;
  }, 0);

  const outcome: number = transactions.reduce((sum, element) => {
    if (element.type === 'outcome') {
      return sum + element.value;
    }

    return sum;
  }, 0);

  total = income - outcome;

  const balance = {
    income,
    outcome,
    total,
  };

  const relation = {
    transactions,
    balance,
  };

  return res.json(relation);
});

export default transactionsRouter;
