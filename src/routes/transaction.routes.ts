import { Router } from 'express';
import { uuid } from 'uuidv4';

const transactionsRouter = Router();

const transactions: any[] = [];
let total = 0;

transactionsRouter.post('/', (req, res) => {
  const { title, value, type } = req.body;

  if (type === 'outcome') {
    if (value > total) {
      return res.status(400).json({
        error: 'The value goes beyond the total amount the user has in cash',
      });
    }
  }

  const transaction = {
    id: uuid(),
    title,
    value,
    type,
  };

  transactions.push(transaction);

  return res.json(transaction);
});

transactionsRouter.get('/', (req, res) => {
  const income = transactions.reduce((sum, element) => {
    if (element.type === 'income') {
      return sum + element.value;
    }

    return sum;
  }, 0);

  const outcome = transactions.reduce((sum, element) => {
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
