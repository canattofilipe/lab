import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  value: number = 1;
  destiny: number = 2;
  transfer() {
    console.log('starting tranfering');
    console.log('value:' + this.value);
    console.log('value:' + this.destiny);
  }
}
