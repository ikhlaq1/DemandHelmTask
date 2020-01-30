import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule, MatToolbarModule, MatTableModule, MatTabsModule,MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatDialogModule} from '@angular/material';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TableComponent } from './table/table.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatSortModule,
    MatToolbarModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
