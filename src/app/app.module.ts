import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { filterPipe } from './filter.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    filterPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
