import { TransactionService } from './../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transactions: any[];

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    this.transactions = this.service.transaction;
  }
}
