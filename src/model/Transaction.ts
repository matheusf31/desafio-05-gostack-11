/**
 * Model (entidade) é uma forma de armazenar os dados;
 * Define o formato do dado;
 */

import { uuid } from 'uuidv4';

// Entidade de transações
class Transaction {
  id: string;

  title: string;

  value: number;

  type: string;

  constructor(title: string, value: number, type: string) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
