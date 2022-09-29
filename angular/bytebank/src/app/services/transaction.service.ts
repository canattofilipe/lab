import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionList: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transactionList = [];
  }

  get transaction() {
    return this.transactionList;
  }

  all(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url);
  }

  add(transaction: Transaction): Observable <Transaction> {
    this.enrich(transaction);
    return this.httpClient.post<Transaction>(this.url, transaction);
  }

  private enrich(transaction: any) {
    transaction.data = new Date();
  }
}
