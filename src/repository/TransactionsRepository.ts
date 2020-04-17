/**
 * Persistência (bd, ou no próprio app) <-> Repositório <-> Rota
 * Buscar as informações que estão dentro de uma DB
 * Método create, find, etc
 * Detentor das operações que faremos em cima dos dados da aplicação
 */

import Transaction from '../model/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income: number = this.transactions.reduce((sum, element) => {
      if (element.type === 'income') {
        return sum + element.value;
      }

      return sum;
    }, 0);

    const outcome: number = this.transactions.reduce((sum, element) => {
      if (element.type === 'outcome') {
        return sum + element.value;
      }

      return sum;
    }, 0);

    const total: number = income - outcome;

    const balance: Balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
