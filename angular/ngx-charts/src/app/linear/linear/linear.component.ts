import { Component, NgModule } from '@angular/core';
import { data } from '../../mock/data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
})
export class LinearComponent {
  multi: any[] = [];
  data: any[] = [];
  view: [number, number] = [1000, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Temperature';
  timeline: boolean = true;
  maxXAxisTickLength: number = 100;
  maxYAxisTickLength: number = 100;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Linear,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() {
    let multi: any[] = [];
    data.forEach((el) => {
      let newSerie: any[] = [];
      el.series.forEach((s) => {
        newSerie.push({ name: new Date(s.name), value: s.value });
      });
      multi.push({ name: el.name, series: newSerie });
    });

    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
