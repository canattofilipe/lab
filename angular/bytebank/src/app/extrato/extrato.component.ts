import { TransactionService } from './../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transactions: any[] = [];

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    this.service.all().subscribe((transactions: Transaction[]) => {
      console.table(transactions);
      this.transactions = transactions;
    });
  }
}
