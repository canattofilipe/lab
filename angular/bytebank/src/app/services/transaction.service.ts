import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionList: any[];

  constructor() {
    this.transactionList = [];
  }

  get transaction() {
    return this.transactionList;
  }

  add(transaction: any) {
    this.enrich(transaction);
    this.transactionList.push(transaction);
  }

  private enrich(transaction: any) {
    transaction.date = new Date();
  }
}
