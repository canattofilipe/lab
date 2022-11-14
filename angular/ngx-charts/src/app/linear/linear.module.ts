import { ClickInfoComponent } from './click-info/click-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearComponent } from './linear/linear.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LinearComponent, ClickInfoComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [LinearComponent],
})
export class LinearModule {}
