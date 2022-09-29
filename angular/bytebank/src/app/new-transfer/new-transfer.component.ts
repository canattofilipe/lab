import { TransactionService } from './../services/transaction.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 1;
  destiny: number = 2;

  constructor(private service: TransactionService) {}

  transfer() {
    console.log('starting tranfering');
    const emmitedValue: Transaction = {
      valor: this.value,
      destino: this.destiny,
    };
    this.onTransfer.emit(emmitedValue);
    this.service.add(emmitedValue).subscribe(
      (result) => {
        console.log(result);
        this.clean();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  clean() {
    this.destiny = 0;
    this.value = 0;
  }
}
