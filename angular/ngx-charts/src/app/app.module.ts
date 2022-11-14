import { LinearComponent } from './linear/linear/linear.component';
import { LinearModule } from './linear/linear.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LinearModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
