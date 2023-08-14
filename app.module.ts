import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveAppComponent } from './leaveapp/leaveapp.component'
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AgGridModule } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';
import { ColDef } from 'ag-grid-community';




@NgModule({
  declarations: [
    AppComponent,
    LeaveAppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
