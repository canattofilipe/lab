import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 1;
  destiny: number = 2;
  transfer() {
    console.log('starting tranfering');
    const emmitedValue = { value: this.value, destiny: this.destiny };
    this.onTransfer.emit(emmitedValue);
    this.clean();
  }

  clean() {
    this.destiny = 0;
    this.value = 0;
  }
}
