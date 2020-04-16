/**
 * Persistência (bd, ou no próprio app) <-> Repositório <-> Rota
 * Buscar as informações que estão dentro de uma DB
 * Método create, find, etc
 * Detentor das operações que faremos em cima dos dados da aplicação
 */

import Transaction from '../model/Transaction';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public create(title: string, value: number, type: string): Transaction {
    const transaction = new Transaction(title, value, type);

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
