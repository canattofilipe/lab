import { Serie } from './linear/model/series.model';
import { Injectable } from '@angular/core';
import { LinearChartData } from './linear/model/data.model';

@Injectable({
  providedIn: 'root',
})
export class AdaptService {
  constructor() {}

  public adapt(data: any[]): LinearChartData[] {
    const linearChartDataArray: LinearChartData[] = [];
    data.forEach((dataElement) => {
      const linearChartData = new LinearChartData();
      linearChartData.name = dataElement.name;
      linearChartData.series = this.buildSeries(dataElement.series);
      linearChartDataArray.push(linearChartData);
    });
    return linearChartDataArray;
  }

  private buildSeries(series: any[]): Serie[] {
    const newSeries: Serie[] = [];
    series.forEach((serie: any) => {
      const newSerie = new Serie();
      newSerie.name = new Date(serie.name);
      newSerie.value = serie.value;
      newSeries.push(newSerie);
    });
    return newSeries;
  }
}
