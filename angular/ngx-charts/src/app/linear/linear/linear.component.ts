import { AdaptService } from './../adapt.service';
import { Component, NgModule } from '@angular/core';
import { data } from '../../mock/data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
})
export class LinearComponent {
  linearChartData: any[] = [];
  data: any[] = [];
  view: [number, number] = [1000, 500];

  selected: string = '';

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

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Linear,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor(adapter: AdaptService) {
    let linearChartData: any[] = adapter.adapt(data);

    Object.assign(this, { linearChartData });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));

    if (data.name) {
      const date = new Date(data.name);
      const fmtDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.selected = `The sensor ${data.series} registered the value ${data.value} on ${fmtDate}`;
    } else {
      this.selected = '';
    }
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
