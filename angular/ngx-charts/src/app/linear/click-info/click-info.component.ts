import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-info',
  templateUrl: './click-info.component.html',
  styleUrls: ['./click-info.component.css'],
})
export class ClickInfoComponent implements OnInit {
  @Input()
  message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
