import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transactions: any[] = [];

  transfer($event) {
    console.log($event);
    const transaction = {...$event, date: new Date()};
    this.transactions.push(transaction);
  }
}
